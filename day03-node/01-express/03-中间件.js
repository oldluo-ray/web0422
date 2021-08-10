// 1. 引入express 
const express = require('express')
// 2. 创建应用对象
const app = express()
//express中中间件的执行是线性模式
// request表示这一次请求的请求对象, response表示这次请求的响应对象,next表示下一个中间件
// 一次请求之后,会有多个中间件执行,执行的这些中间件中接收到的请求和响应对象其实是同一个

// 注意点: 
// express中间件事线性的,所以中间件,一般都是写在路由的上面.一般都是在响应之前,做一些操作
// 当然中间件,也可以写在路由的下面,那么就在路由的回调中,接收next.调用next就可以.不过这样没有意义
app.use((request,response,next)=>{
    // request.a = 1
    // response.b =2
    console.log('第一个中间件执行了');
    // 想让下一中间件执行,就必须调用next,否则请求会被服务器端终止了
    next()
})
app.use((request,response,next)=>{
    // console.log(request.a, response.b);
    console.log('第二个中间件执行了');
    next()
})
// 3. 配置路由
app.get('/test',(request,response,next)=>{
    // console.log(request.a,response.b);
    response.send('ok') 
    next()
})
app.post('/test/:page',(request,response)=>{
    response.send('<h1>post请求</h1>')
})



app.listen(5000,(err)=>{
    if(err) console.log('服务器开启失败');
    else console.log('服务器启动成功');
})


