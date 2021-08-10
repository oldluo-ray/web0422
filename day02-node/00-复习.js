/*

  1. node是什么?

        node是一个基于v8引擎的js运行环境

  2. node中如何执行js代码?

        在命令行窗口中, 执行node js文件路径

        js文件路径相对的就是当前命令行窗口的路径

  3. node中的导入和导出如何实现?

        1. 如何导出: 
             exports.属性名 = 值
             exports = {name: 'zs'} 不能这样写 为什么? 
             module.exports = exports = {} 当module.exports 和 exports指向不同,以module.exports 为准

        2. 如何导入: 

                require('')
                    如果导入自定义的模块,写的是路径
                    如果导入的是第三方包或node中内置的模块, 写的就是包名
                    
                作用: 1. 导入一个js文件,这个文件里的代码,会被执行一次
                      2. 将导入的js文件中导出的数据,导入到当前js文件中

  4. npm是什么,以及如何使用?

        npm是一个包管理工具 

        查看npm的版本: npm -v 
        初始化包:  npm init -y 但是文件夹的名称默认就是包名
        包名的注意点: 1. 不能有中文, 2. 不能有大写 3. 不能和其他的包名冲突

        下载一个生产环境的本地包: npm i jquery
        下载一个开发环境的本地包: npm i browserify -D
        下载一个全局包: npm i 包名 -g
        下载jquery1.12.4指定版本: npm i jquery@1.12.4 
        下载项目所有的依赖包: npm i 
            会根据package-lock.json 或 package.json 会下载项目的依赖包(优先找package-lock.json)
        
        package.json中: 
            dependencies: 生产环境下依赖的包. 会打包到最终的代码中
            devDependncies: 开发环境下依赖的包. 不会打包到最终的代码中

        
        删除包: npm remove 包名 
        同时下载多个包: npm i 包名 包名 

        npm默认的下载路径是国外的地址,在国内下载相对比较慢.所以要修改下载地址
        npm config set regisitry 地址 设置npm默认下载地址
        npm config get regisitry 查看npm 默认下载地址





*/