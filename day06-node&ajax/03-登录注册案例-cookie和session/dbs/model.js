const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    regisiter_date: {
        type:Date,
        default: Date.now()
    },
    info: {
        type: String,
        default: '暂无'
    }
},{
    collection: 'user'
})

module.exports = mongoose.model('user', userSchema)