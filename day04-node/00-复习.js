/*

    express快速搭建服务器

        1. 引入express
            const express = require('express')

        2. 创建应用对象
            const app = express()

        3. 配置路由
            app.get('/test/:id?',(request, response)=>{

                    获取查询字符串: request.query
                    获取post请求主体中的数据: request.body
                    获取路由参数(写在路径中):  request.params

                    response: 
                        响应数组: response.send
                        响应文件: response.sendFile(path.resolve(__dirname, '路径','路径'))
                        下载文件: response.download(相对/绝对)
                        重定向: response.redirect(新的地址)
                        设置响应头: response.set()

            })

        4. 开启服务器
            app.listen(端口号, 回调函数)


    中间件

        中间件是什么: 函数
        中间件执行时机: 请求发送来之后,先执行中间件,后执行路由中的回调
        分类: 
            应用级(自定义) app.use((request,response,next)=>{})
            第三方: app.use(bodyParser.urlencoded({extended: true}))
            express内置:
                app.use(express.urlencoded({extended: true})) 处理post请求上传的数据
                app.use(express.static(静态资源所处文件夹的路径))

        注意: 中间件,一般要写在路由的前面


    数据库:

        数据库分类: 

            关系型数据库:
                mySQL, Oracle

                数据库
                表
                字段
                数据行

                使用sql语句操作关系型数据库


            非关系型数据(nosql):

                mongodb, redis

                数据库
                集合
                文档(具体的一条数据, json)

                不适用sql,而是使用对应的一些api


*/