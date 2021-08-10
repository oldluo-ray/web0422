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
app.get('/test',(request,response)=>{
    console.log(request.query); // 获取get上传的查询字符串,会直接解析成一个对象.方便获取数据
    // response.send('呵呵') // send一般用来响应字符串/数组/对象
    // let arr = [{name: '海静', info:'lsp'},{name:'李晶', info:'也是lsp'}]
    // express会自动将数组,转成json字符串,然后后响应给客户端
    // response.send(arr)
    // response.sendFile('')
    // console.log(__dirname);
    // console.log(__dirname+'../assets/队列.jpg');
    // response.sendFile(__dirname+'../assets/队列.jpg')
    // console.log(path.resolve('a','b','c','d'));
    // const address = path.resolve(__dirname,'../assets/防盗链');
    // response.sendFile(address) // 用于响应文件, 要求必须是绝对路径, 如果文件是浏览器认识的,就直接展示,如果浏览器不认识,就下载
    // response.download('./assets/队列.jpg') // 用于让浏览器下载文件, 可以写相对路径/绝对路径 
    // response.redirect('http://www.atguigu.com') //重定向. 其实就是设置响应头: location: 新的地址.浏览器接收到响应之后,根据新的地址,重新发起请求
    // response.set('a',1) //往响应头中添加信息
    // console.log(response.get('X-Powered-By'));
    // response.send('测试')

    // response.sendFile() 响应文件 绝对路径
    // response.download() 下载文件, 相对/绝对
    // response.send() 响应字符串/数组/对象
    // response.redirect() 重定向
    // response.set('键',值) 设置响应头
    // resposne.get('键')获取响应头信息,但是不是都能获取到

    // path.resolve('路径','路径','路径') 帮我们自动拼接路径

    response.send('<h1>123</h1>')

})
app.post('/test',(request,response)=>{
    console.log(request.body); //获取post,请求主体中的信息. 但是默认情况拿不到,需要配合后面要学习的中间件
    response.send('<h1>post请求</h1>')
})

app.listen(5000,(err)=>{
    if(err) console.log('服务器开启失败');
    else console.log('服务器启动成功');
})

