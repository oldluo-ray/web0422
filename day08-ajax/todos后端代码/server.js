;(async function () {
  const express = require('express')
  const cors = require('cors') //用来处理跨域资源共享的第三方中间件
  const router = require('./routers/logic')
  const db = require('./dbs/db')
  await db // 等待数据库连接成功之后,再开启服务器
  console.log('数据库连接成功')
  const app = express()
  //处理post上传的参数
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())

  // 服务器端定义路由的路由器对象
  app.use(router)

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
