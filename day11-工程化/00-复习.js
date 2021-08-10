/*

    模块化: 

        模块化要解决什么问题?
            1. 解决全局变量污染
            2. 依赖问题

        前端有哪些模块化规范?

            AMD  依赖前置 require.js
            CMD  依赖就近 sea.js
            ES6  需要先用babel将es6模块化语法转成commonjs.然后再使用browserify将commonjs转成浏览器可以识别的代码
            commonjs node.js实现了

        es6模块化规范如何使用?

            导出: 
                统一导出  export { 变量名, 变量名}
                分别导出  export 声明语句
                默认导出  export default 值

            导入: 
                分别和统一导入时是一样的  import {变量名 as 重新命名变量} from '模块名/路径'  变量名要和导出时一致

                默认导出: import 变量名 from '路径/模块名' 变量名随意定义

            三种导出方式混合在一起,如何导入: 
                import 变量名, {变量名} from '路径/模块名' 默认导出的变量名一定要写在前面


    gulp

        gulp是什么? 前端的构建工具(打包代码)

        gulp的使用? 

            下载:   全局下载gulp-cli
                   本地下载gulp(开发)
            定义配置文件:
                   gulpfile.js (项目根目录)

            定义任务,在任务的回调函数中,调用插件
                   gulp.task(任务名,()=>{
                       使用插件,完成指定任务
                   })















*/