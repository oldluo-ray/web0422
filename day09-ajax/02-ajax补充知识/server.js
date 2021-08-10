// const express = require('express')
// const cors = require('cors')
// const formidable = require('express-formidable')
// const app = express()
// app.use(cors())
// // urlencode只能处理键=值&键=值这种格式的数据
// // app.use(express.urlencoded({ extended: true }))
// // app.use(express.json())
// app.use(formidable())
// app.get('/test', (req, res) => {
//   res.send(req.query)
// })
// app.post('/test', (req, res) => {
//   console.log(req.fields)
//   res.send(req.fields)
// })

// app.listen(5000, () => {
//   console.log('ok')
// })

const express = require('express')
// 处理上传的文件的
const multer = require('multer')

// 解决跨域
const cors = require('cors')
// 设置保存路径
const upload = multer({
  dest: './static/upload',
})
const app = express()

app.use(cors())
app.use(express.static('./public'))
app.use(upload.any())
// app.use(express.urlencoded({ extended: true }))
app.post('/upload', (req, res) => {
  console.log(req.files)
})

app.listen(5000, () => {
  console.log('ok')
})
