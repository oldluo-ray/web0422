;(async function(){
    const express = require('express')
    // db就是数据库连接的promise对象
    const db = require('./dbs/db')
    //引入model对象
    const model = require('./dbs/model')
    await db
    console.log('数据库连接成功了');
    const app = express()

    // 当浏览器请求的url是: http://127.0.0.1:5000/find get方式
    // 获取所有数据
    app.get('/find',async (req,res)=>{
        // 查找数据库中所有的数据,响应给浏览器
        const result = await model.find()
        console.log(result);
        res.send(result)
    })
    
    
    app.listen(5000,(err)=>{
        if(err) console.log('服务器开启失败',err);
        else console.log('服务器开启成功');
    })
})()