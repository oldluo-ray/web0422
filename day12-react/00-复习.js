/*

    wepback: 前端项目构建工具

        webpack和webpack-cli
        注意: webpack-cli要比webapck低一个版本

        webpack的五大核心概念:
            默认的配置文件: 在项目的根目录  webapck.config.js

            mdoule.exports = {
                entry: 入口
                output: 出口
                mode : 模式
                module: {  加载器
                    rules: [{},{}]
                },
                plugins: []  插件
            }

            入口 定义了整个项目的入口文件的路径
            出口 打包之后js文件的名称以及所处的路径
                filename  决定了文件的名称
                path 决定了文件的路径
            模式
                development 开发环境 不会压缩代码
                production  生产环境 会压缩代码

            加载器
                webapck本身只能处理js和json以及图片,其他的静态资源无法处理,就需要用到加载器
                加载器使用时,要下载,但是无需引入. 直接使用即可

            插件
                加载器也完成不了的功能,就交给插件去做.要下载,要引入,再使用



            执行的时候,在命令行窗口中执行webpack指令. 默认查找当前项目的根目录下的webapck.config.js 


        定义多个配置文件: 

                webpack.dev.js 
                webpack.prod.js


        如何配置npm自定义指令:

                在package.json中的scripts属性中

                "scripts":{
                    // 告诉webpack 执行的配置文件在哪里,执行的配置文件是谁
                    "start": "webpack serve --config ./config/webpack.dev.js"
                    "build": "webpack --config ./config/webpack.prod.js"

                }

                npm start  start比较特殊,可以忽略run
                npm run build



*/
