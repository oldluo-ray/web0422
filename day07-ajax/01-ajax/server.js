const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.post('/test', (req, res) => {
  // setTimeout(() => {
  res.send(req.body)
  // res.send('123')
  // }, 4000);
})
app.get('/test', (req, res) => {
  // res.send(req.query)
  let arr = [{ name: 'hj' }, { name: 'lj' }]
  // 注意:send中直接传入一个数组,express会自动执行JSON.stringify,将数组转成json字符串,但是我们拼接字符串,数组转字符串的时候,使用toString().就转成了[Object object]
  // 所以拼接的时候,需要自己手动转成json字符串
  // arr = JSON.stringify(arr)
  // const { callback } = req.query
  // res.send(`let arr = ${arr}`) // let arr = [{},{}]
  // res.send(`${callback}(${arr})`) // fn([{},{}])
  //使用跨域资源共享
  res.send(arr)
})
app.listen(5000, () => {
  console.log('ok')
})
