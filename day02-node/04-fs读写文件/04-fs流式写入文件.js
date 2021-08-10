const fs = require('fs')

// 创建写入流
const ws = fs.createWriteStream('./夜曲.flac') //如果文件,会自动创建. 自动开启写入流
const rs = fs.createReadStream('./周杰伦-夜曲.flac') // 创建读取流的时候,就相当于开启了读取流

rs.on('data',(data)=>{
    // 在读取的过程中,将每次读取到的数据,写入到指定文件中
    ws.write(data)
})

// 监听读取流开启了
rs.on('open',()=>{
    console.log('读取流开启了');
})
rs.on('close',()=>{
    // 当文件中的内容,读取完毕的时候,就自动关闭
    console.log('读取流关闭了');
    // 关闭写入流
    // 注意: 读取流会自动开启和关闭,但是写入流,不会自动关闭,所以要手动关闭
    ws.end()
})

ws.on('open',()=>{
    console.log('写入流开启了');
})
ws.on('close',()=>{ 
    console.log('写入流关闭了');
})



// 关闭写入流: ws.end()


