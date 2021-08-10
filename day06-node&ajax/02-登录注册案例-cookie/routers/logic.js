const express = require('express')
const model = require('../dbs/model')
 // 创建路由器对象
const router = express.Router()

 // 根据需求配置路由:
// 处理注册逻辑
router.post('/register',async (request,response)=>{

    // 接收用户上传的数据,并且添加数据库中
    const {username, password} = request.body // {username: xxx, password: xxx, repassword: xxx}
    await model.create({
        name: username,
        password
    })
    response.redirect('http://127.0.0.1:5000/login')
})
//处理登录逻辑
router.post('/login',async (request,response)=>{
    const {username, password} = request.body
    const user = await model.findOne({name: username, password })
    if(user){
        //相当于往响应头中,添加了set-cookie: userid=id值
        // 默认cookie的有效期是一次会话的时间
        // 会话: 登录成功直到关闭浏览器
        // response.cookie('userid', user._id)
        // 如果写了第三个参数: 就可以自定义cookie的有效期. maxAge的单位是毫秒
        response.cookie('userid', user._id, {maxAge: 1000 * 60*10})
        // 登录成功
        response.redirect('http://127.0.0.1:5000/home')
        // 让前端动态的展示用户数据
        // response.redirect('http://127.0.0.1:5000/home?name='+user.name)
        // response.redirect('http://127.0.0.1:5000/home?name=海静')
       
    }else{
        //登录失败
        response.send('登录失败,账号或密码错误')
    }
})

module.exports = router
    