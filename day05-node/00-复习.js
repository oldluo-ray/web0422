/*

    如何手动启动mongodb数据库软件?
         mongod.exe

    如何检查mongodb数据库软件是否正常启动?
        127.0.0.1:27017
        看到一句话,没表示已经正常开启了

    如何开启操作mongodb的客户端?
        mongo

    mongoose如何使用?
        1. 连接数据库
        const mongoose = require('mongoose')
        mongoose.connect('mongodb://127.0.0.1:27017/数据库的名字') 返回一个promise对象,如果连接成功.promise的状态会被修改为成功
        2. 创建Schema 
        const Schema = mongoose.Schema 
        const xxxSchema = new Schema({
            对于集合中文档的属性的限制: 
            name:{
                type: 数据类型
                required: 必填
                unique: 值不能重复
            }
        },{collection:集合名})
        3. 创建model对象
        const model = mongoose.model('集合名', Schema对象)

        4. 增删改查

            添加一条数据: 
                model.create({属性:值,}) 不写回调,返回一个promise
            查找一条数据: 
                model.finedone({age: {$gt: 18}}, {name: 1}) 返回promise

                find和findOne的区别: 
                    1. find可以获取到多条数据, findOne只能拿到一条数据
                    2. find返回数组,即便没有找到数据,也是数组. findOne找到就返回数据对象,否则就是null

            修改一条数据: 
                model.updateOne({查询条件}, {$set: {age: 10}}) 返回promise

            删除一条数据: 
                 model.deleteOne({查询条件}) 返回promise


            

            index.js 
                引入连接数据库的代码,数据库连接成功之后
                开启服务器
                在index.js中配置路由,在具体的路由的回调中,对数据库进行增删改查
            /dbs
                db.js 
                    const mongoose = require('mongoose')
                    module.exports = mongoose.connect('mongodb://127.0.0.1:27017/数据库的名字')
                model.js
                    创建Schema
                    创建model,导出model

            
                    



 */