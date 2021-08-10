//增删改查的路由
const express = require('express')

const router = express.Router()
const {
  findTodos,
  addTodo,
  updateOne,
  updateMany,
  deleteTodos,
} = require('../dbs/crud')

//响应所有任务数据的路由
router.get('/findTodos', async (req, res) => {
  console.log('路由执行,接收到请求了')
  // 获取jsonp上传的函数名
  const { callback } = req.query
  // 查找所有的任务数据
  let todos = await findTodos()
  // 将数组转成json字符串
  todos = JSON.stringify(todos)
  //响应数据
  res.send(`${callback}(${todos})`) // fn([{},{},{}])
})
// 将上传的任务名添加到数据库,然后响应最新的任务列表数据
router.post('/addTodo', async (req, res) => {
  // 获取浏览器上传的任务名
  const { todoName } = req.body
  // 将任务添加到数据库中
  await addTodo(todoName)
  // 查找添加之后最新的数据
  const result = await findTodos()
  // 将最新的数据响应给浏览器
  res.send(result)
})

//修改每一个任务的完成的状态
router.post('/updateOneTodo', async (req, res) => {
  //接收要修改的数据的id
  const { id, isDone } = req.body

  await updateOne(id, isDone)
  const result = await findTodos()
  res.send(result)
})

//修改所有的任务状态
router.post('/updateAllTodos', async (req, res) => {
  //接收要修改的数据的id
  const { isDone } = req.body
  await updateMany(isDone)
  const result = await findTodos()
  res.send(result)
})

// 删除的路由
router.post('/deleteTodos', async (req, res) => {
  // 接收浏览器上传上来的要删除的id.但是不管是多个还是一个,都应该是一个数组
  let { ids } = req.body
  // ids拿到之后一个一个字符串,格式: ["id值","id值"]
  // 需要转成数组.注意:严格的json模式是双引号,所以格式中id应该使用双引号["id值","id值"]
  ids = JSON.parse(ids)
  await deleteTodos(ids)
  const result = await findTodos()
  res.send(result)
})

module.exports = router
