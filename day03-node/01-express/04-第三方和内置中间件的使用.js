// 1. 引入express 
const express = require('express')

const bodyParser = require('body-parser')
const path = require('path')
// 2. 创建应用对象
const app = express()

//使用中间件
// bodyParser.urlencoded返回一个新的函数,这个第三方的中间件,帮我们解析post请求的数据,然后将解析后的数据,添加到request.body属性上.
// app.use(bodyParser.urlencoded({extended:true}))

// 使用内置中间件(注意是express内置,下载express的时候,就已经下载好了,无需额外下载,也无需引入)
// 处理post请求上传的数据
app.use(express.urlencoded({extended:true}))


// 处理静态资源文件 assets表示静态资源所处的文件夹的路径
app.use(express.static('assets'))
// 以上urlencoded和static都返回一个函数,返回的函数,才是真正的中间件函数

// 3. 配置路由
app.get('/test',(request,response,next)=>{
    response.send('ok') 
})

app.post('/test',(request,response)=>{
    console.log(request.body);
    response.send('<h1>post请求</h1>')
})

// 处理静态资源的路由
// app.get('/%E9%98%9F%E5%88%97.jpg',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'assets','队列.jpg'))

// })
app.listen(5000,(err)=>{
    if(err) console.log('服务器开启失败');
    else console.log('服务器启动成功');
})


