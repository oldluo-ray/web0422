const model = require('./model')
//从数据库中查找所有数据的方法
function findTodos() {
  return model.find()
}
// 添加任务到数据库中的方法
function addTodo(todoName) {
  return model.create({
    todoName,
  })
}

function updateOne(_id, isDone) {
  return model.updateOne({ _id }, { $set: { isDone } })
}
function updateMany(isDone) {
  return model.updateMany({}, { $set: { isDone } })
}

function deleteTodos(ids) {
  
  return model.deleteMany({ _id: { $in: ids } })
}
module.exports = {
  findTodos,
  addTodo,
  updateOne,
  updateMany,
  deleteTodos,
}
