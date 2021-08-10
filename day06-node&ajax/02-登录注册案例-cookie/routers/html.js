const express = require('express')
const { resolve } = require('path')
const model = require('../dbs/model')
 // 创建路由器对象
const router = express.Router()

 // 根据需求配置路由:
// 响应注册页面的路由
router.get('/register', (request,response)=>{

    //响应register页面
    response.sendFile(resolve(__dirname,'../assets/views', 'register.html'))
   
})
//响应登录页面的路由
router.get('/login', (request,response)=>{
   //响应login页面
   response.sendFile(resolve(__dirname,'../assets/views', 'login.html'))
})
// 处理响应首页的路由
router.get('/home', async (request,response)=>{

    // 获取cookie中的信息,如果有,就认为登录成功,否则,就重定向到登录页面
    const userid = request.cookies.userid
    
    if(userid){
        // 登录成功了
         // 需要拿到当前登录用户的信息.可以直接从数据库中查找
        // 根据id,查询信息
        const user = await model.findOne({_id: userid})
        response.render('home', user)

    }else{
        // 没有登录或已经退出了
        // 重定向到登录页面
        response.redirect('http://127.0.0.1:5000/login')
    }
   
 })

module.exports = router