// 1. 引入express 
const express = require('express')
const path = require('path')
// path.resolve 可以帮助我们拼接路径

// 2. 创建应用对象
const app = express()
// 禁止服务器在响应头中响应后端的语言/框架.,为了安全
app.disable('x-powered-by')

// 3. 配置路由
// 路由: 一系列事物的一一对应关系
// 后端路由: url地址和资源的一一对应关系
// app.get('路径',回调函数)
// app.post('路径',回调函数)
// 注意点: 
// 1.配置了路由参数,请求的时候就必须传参,否则,路由无法匹配
// 2.如果路由参数后面加了? ,表示这个参数可以写也可以不写
// 3.如果传入一个参数,但是配置有两个参数,默认这个传入的值,会赋值给那个不可选的参数
// 4.路由参数不受请求方式的限制,get/post都可以使用
app.get('/test/:id?/:page?',(request,response)=>{

    console.log('路由参数:',request.params); //request.params用来接收路由参数
    response.send('ok')
    
})
app.post('/test/:page',(request,response)=>{
    // console.log(request.body); //获取post,请求主体中的信息. 但是默认情况拿不到,需要配合后面要学习的中间件
    console.log(request.params);
    response.send('<h1>post请求</h1>')
})

app.listen(5000,(err)=>{
    if(err) console.log('服务器开启失败');
    else console.log('服务器启动成功');
})


