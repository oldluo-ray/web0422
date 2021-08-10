;(async function(){
    const express = require('express')
    const db = require('./dbs/db')
    const logicRouter = require('./routers/logic')
    const htmlRouter = require('./routers/html')
    await db
    console.log('数据库连接成功了');

    const app = express()

    //处理静态资源的中间件
    // 请求是: 127.0.0.1:5000相当于就指向到了assets路径下,里面的静态资源,按照目录结构直接写就可以了
    app.use(express.static('assets'))
    // 处理post请求上传的数据
    app.use(express.urlencoded({extended:true}))
    
    // 配置项目中要使用模板引擎
    // 告诉express, 使用的模板引擎是ejs
    app.set("view engine" , "ejs");
    // 告诉express,模板存放在哪里
    app.set("views","./ejs")

    // 使用路由器中间件的代码,一定要写在静态资源和处理post数据的后面,因为中间件执行是线性的
    // 使用路由器中间件,将登录和注册的路由写到别的js文件中
    app.use(logicRouter)
    app.use(htmlRouter)


    app.listen(5000,(err)=>{
        if(err) console.log('服务器开启失败');
        else console.log('服务器开启成功');
    })
 
})()
