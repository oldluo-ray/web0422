// 1. 引入内置模块 http 
const http = require('http')
// 2. 创建服务对象
// 只要客户端给当前服务器发送请求,那么回调函数就会调用
// 每次请求发送过来,都会根据当前这次请求,创建对应的请求对象和响应对象
const server = http.createServer((request, response)=>{
    // request 是当前这次请求的请求对象,包含了这一次请求的所有信息
    console.log(request.url); // ?属性=值&属性=值
    // response 是当前这次的响应对象,可以利用这个响应对象,响应客户端信息
    console.log('客户端发送请求,这个回调函数调用');
    // 可以解决中文乱码问题
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('哈哈') //传入什么,就给客户端响应什么
})
// 3. 开启服务器
server.listen(5000,(err)=>{
    if(err) console.log('服务器启动失败');
    else console.log('服务器启动成功');
})