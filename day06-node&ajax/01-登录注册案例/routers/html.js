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
    // console.log(request.body);
    //响应login页面
    // response.sendFile(resolve(__dirname,'../assets/views', 'home.html'))
    // response.render('模板的名称', {要渲染的数据})
    // 当render执行的时候,express会自动去ejs文件夹下面,去找home.ejs模板. 找到模板之后,让ejs包会模板的代码,进行解析.<%%> 外面的代码原样输出. 里面的代码按照ejs规范解析(可以直接使用传入的数据对象中的属性)
    // 解析完毕之后,response.render会自动将解析后的结果,响应给浏览器
    // response.render('home', {username: '<h5>海静</h5>', age: 6 , hobby: ['抽烟','喝酒','找富婆', 'cs']})

    // 需要拿到当前登录用户的信息.可以直接从数据库中查找
    const { id } = request.query
    // 根据id,查询信息
    const user = await model.findOne({_id: id})
    response.render('home', user)
 })

module.exports = router