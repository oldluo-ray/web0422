//在01中引入了02. 执行01的时候,02也会被执行
const module1 = require('./02-node中执行的其他文件')
console.log('在node中执行js');