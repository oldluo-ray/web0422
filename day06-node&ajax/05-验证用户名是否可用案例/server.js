const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
  const { username } = req.body
  let arr = ['zs', 'ls', 'hj']

  const result = arr.find((item) => {
    return item === username
  })
  if (result) {
    // 响应浏览器,这个用户名不可用
    res.send({ code: 100, msg: '当前用户名不可用' })
  } else {
    // 响应浏览器,这个用户名可用
    res.send({ code: 200, msg: '当前用户名可用' })
  }
})
app.listen(5000, () => {
  console.log('ok')
})
