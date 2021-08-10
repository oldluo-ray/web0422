const fs = require('fs')

// 创建读取流(创建水管)
const rs = fs.createReadStream('./周杰伦-夜曲.flac',{
    // 相当于设置水管的粗细,单位是字节
    highWaterMark: 5257 * 1024
})
// rs.on('data')相当于开始读取文件,并且通过回调可以接收到数据
rs.on('data',(data)=>{
    console.log(data);
})