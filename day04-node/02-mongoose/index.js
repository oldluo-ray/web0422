;(async function (){
    const express = require('express')
    const mongoose = require('mongoose')
    // 一般服务器都是要去数据库中查询数据,如果数据库没有连接成功,那么也没有必要开启服务器
    // connect返回一个promise对象,如果连接成功,promise状态修改为成功,否则修改为失败
    await mongoose.connect('mongodb://127.0.0.1:27017/web0422',{
        // 加上这两句话,可以解决提示废弃警告的问题.内部优化了,所以希望我们按照要求,传入配置信息,内部就使用最新的方式去处理代码
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('数据库连接成功');

    // 创建Schema对象
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
    const userModel = mongoose.model('user',userSchema)
    // 往集合中添加一条数据
    // userModel.create({
    //     name: 'hj',
    //     age: '38', 
    // },(err,result)=>{
    //     // 当数据添加成功,err是null, result是添加的那条数据
    //     // 当数据添加失败, err是错误对象, result是undefined
    //     console.log(err,result);
    // })
    // 查找数据
    // userModel.find({name:'xxx'},(err,data)=>{
    //     //data一定是一个数组,即便没有找到匹配的数据,也是空数组
    //     console.log(err,data);
    // })
    // userModel.findOne({name:"xx"},(err,data)=>{
    //     //data 就是查找到的第一条数据, 没找到就是null
    //     console.log(err,data);
    // })

     const result = await userModel.find({name:'hj'})
     console.log('find返回的内容',result);

    // 修改数据
    // userModel.updateOne({name:'hj'},{$set:{info: '一号lsp'}},(err,data)=>{
    //     console.log(err,data);
    // })
    // userModel.updateMany({age: {$gt: 18}},{$set:{info: 'lsp'}},(err,data)=>{
    //     console.log(err,data);
    // })

    //删除
    // userModel.deleteOne({name: 'hj'},(err,data)=>{
    //     console.log(err,data);
    // })
    // userModel.deleteMany({age:{$gt: 18}},(err,data)=>{
    //     console.log(err,data);
    // })
   
    const app = express()

    app.listen(5000,()=>{
        console.log('ok');
    })

})()
