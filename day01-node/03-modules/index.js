// index.js 是入口文件
// module1接收的其实是module1.js文件中暴露出来的内容
// 如果引入的js文件,没有写暴露的代码,那么默认接收到的就是空对象
const module1 = require('./module1')
const module2 = require('./module2')
const module3 = require('./module3')

// 注意: 在node平台中,执行js文件的时候,node会自动创建一个函数,并且将对应js文件中的代码,包裹在这个函数体中,所以每一个js文件,都有一个自己的局部作用域,其他js文件中,默认无法获取到当前js文件中声明的变量/常量/函数
// console.log(arr);

console.log(module1, module2, module3);
