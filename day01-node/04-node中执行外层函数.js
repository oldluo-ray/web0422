// function fn(){
//     console.log(123);
//     // 返回的就是当前函数
//     console.log(arguments.callee.toString());
// }
// fn()

// console.log(arguments.callee.toString());
// function (exports, require, module, __filename, __dirname){}

console.log(__dirname); //返回当前js文件,所处的绝对路径
console.log(__filename); // 返回当前js文件,所处的绝对路径,包含了当前文件名
