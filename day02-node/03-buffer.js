// 创建buffer
// const buffer = new Buffer(10)
// console.log(buffer);
// 推荐写法: 
// Buffer.alloc() // 安全的创建buffer实例
// Buffer.allocUnsafe() // 高效,但是不安全的插件buffer实例
// Buffer.from() // 将其他数据类型,转成buffer
// const buffer = Buffer.alloc(10)
// console.log(buffer);
// const buffer = Buffer.allocUnsafe(10)
// console.log(buffer);
// const buffer = Buffer.from('中文')
// console.log(buffer);
