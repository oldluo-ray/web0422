//注意: mongoose引入了多次,但是只执行一次
const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const userSchema = new Schema({
    name: {
        type: String, //type表示属性的数据类型
        required: true, // 表示当前name属性必须写
        unique: true //表示用户的名字不能重复
    },
    age: {
        type: Number,
        required: true
    },
    info: {
        type:String,
        default: '暂无'
    },
    register_date: {
        type: Date,
        default: Date.now()
    }
},{
    // 解决mongoose自动加s的问题
    collection:'user'
})
// 创建model对象(集合对象)
// mongoose.model('集合名',Schema对象)
// 注意: 使用mongoose,创建集合的时候,会自动帮我们在自定义的集合名后面加一个s.如果本身后面有s,就不加
// 因为要在别的js文件中,使用model对象,所以导出
module.exports =  mongoose.model('user',userSchema)