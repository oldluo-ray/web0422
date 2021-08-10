// 这个文件,用于修改vue脚手架中配置的webpack配置项
// 文件名:vue.config.js 必须和package.json在同一路径下, 文件名不能乱写
// 只要配置项的代码发生变化,项目就要重启
module.exports = {
    // lintOnSave:false // 关闭eslint语法检查

    // 配置代理: 
   devServer: {
    // proxy: 'http://127.0.0.1:5000' // 简写形式
    proxy: {
        // 在浏览器中发送请求的路径要以/api开头,才会代理到5000的服务器
        '/api': {
            target: 'http://127.0.0.1:5000',
            // 比如: 前端请求地址 /api/test 当代理执行的时候,会将/api替换成''. 最终发送的路径/test
            pathRewrite: {'^/api': ''},
            changeOrigin: false // 给目标服务器发送请求的时候,伪装请求头中的host
        },
        '/atguigu': {
            target: 'http://127.0.0.1:5001',
            pathRewrite: {'^/atguigu': ''}
        }
    }
   }
}