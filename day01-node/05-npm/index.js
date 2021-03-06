// 在项目中使用第三方的包:
// 1. 下载 npm install 包名  包在node_modules中
// 2. 引入  require('包名') 注意: 自定义的模块,要写路径. 第三方的和node内置的,就只写包名即可. 执行引入的时候,node会根据引入方式,判断是否是自定义的模块,如果不是,就判断是否是内置的包,如果也不是,就直接去node_modules中找指定的包,找到了,就返回对应的包中导出的对象/方法... .找不到就报错
// 3. 调用方法或属性
const uniq = require('uniq')
// console.log(uniq)
let arr = [1, 2, 3, 2, 1, 4, 6, 4, 3]
uniq(arr)
console.log(arr)

// npm 常用指令总结:

// 1. npm -v 查看版本号
// 2. npm init 初始化包,但是会询问package.json的信息
// 3. npm init -y 初始化包,会自动生成,不会询问.注意包名,不要有大写,有中文,不要和其他包名冲突
// 4. npm install 包名 下载本地包, 下载最新版本, 下载到生产环境下
// 5. npm i 包名 包名 包名 同时下载多个本地包,下载最新版本, 下载到生产环境下
// 6. npm i 包名@x.x.x 下载本地包, 下载指定版本, 下载到生产环境下
// 7. npm i 包名 -D  下载本地包, 下载最新版本, 下载到开发环境下 (开发环境的包,最终不会打包到上线的代码里)
// 8. npm i 包名 -g 下载全局包, 下载最新版本  工具下载到全局(在c盘的指定路径下)
// 9. npm remove 包名 移除包
// 10. npm i 根据package.json或package-lock.json下载当前项目所有的依赖包(开发和生产都下载)

// 注意: npm i 包名 -g 也可以写成 npm i -g 包名

// * 关于版本号的总结：
//  * 1."^3.3.1" ------锁定大版本，以后下载的包必须保证是：3.x.x形式，至于x默认下载最新的。
//  * 2."~3.3.1" ------锁定小版本，以后下载的包必须保证是：3.3.x形式，至于x默认下载最新的。
//  * 3."2.1.2" ------严格锁定版本，必须为2.1.2
//  *
//  * */
