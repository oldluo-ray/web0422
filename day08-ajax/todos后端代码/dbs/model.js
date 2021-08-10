// 创建Schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todosSchema = new Schema({
  todoName: {
    type: String,
    required: true,
    unique: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
})
// 创建model
module.exports = mongoose.model('todos', todosSchema)
