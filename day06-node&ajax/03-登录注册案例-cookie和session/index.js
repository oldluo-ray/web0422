;(async function(){
    const express = require('express')
    const session = require("express-session");
    const MongoStore = require('connect-mongo')(session);
    const db = require('./dbs/db')
    const cookieParser = require('cookie-parser')
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
    // 帮助我们解析上传上来的cookie信息
    app.use(cookieParser())
    app.use(session({
        name: 'sessionid',   //设置cookie的name，默认值是：connect.sid
        secret: 'atguigu', //参与加密的字符串（又称签名）
        saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
        resave: true ,//是否在每次请求时重新保存session
        store: new MongoStore({
          url: 'mongodb://localhost:27017/test-app',
          touchAfter: 24 * 3600 // 24小时之内只修改一次
        }),
        cookie: {
          httpOnly: true, // 开启后前端无法通过 JS 操作
          maxAge: 1000*30 // 这一条 是控制 sessionID 的过期时间的！！！
        },
      }));
      
    
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
