// 读取文件: 
// 1. 引入fs模块
const fs = require('fs') // fs是node中内置的模块,无需下载,直接引入,使用即可
// 2. 调用异步读取文件的方法
// fs.readFile('文件路径',回调函数)
fs.readFile('./test.txt',(err,data)=>{
    //err 就是错误对象,当读取发生错误的时候,传入一个错误对象,读取没有问题,就传入null
    //data就是我们读取到的数据 buffer
    console.log(err, data);
})

console.log('主线程');