import fn from './module1'

// import '../json/data.json' // 注意: 如果import后面直接写路径,就意味着着路径指向的文件会被执行,但是没有接收这个路径指向文件导出的数据
import jsonObj from '../json/data.json' //如果要接收json数据,直接使用默认导出的导入形式即可

import '../css/test.css' //引入css文件
import '../less/demo.less' //引入less文件
import '../css/iconfont.css' //引入字体库的css文件
console.log(jsonObj)
fn()

console.log(123123123123)

//  webpack本身可以处理js和json文件
//  处理js: 可以直接将es6模块化语法,解析成浏览器认识的(注意:其他的js兼容问题,没有处理)
//  处理json: 可以在js模块中,直接拿到json数据
//  如果是开发环境,不会压缩混淆代码. 如果是生产环境,可以自动压缩混淆代码
