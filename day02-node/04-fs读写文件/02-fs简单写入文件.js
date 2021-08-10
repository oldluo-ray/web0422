const fs = require('fs')
// 简单写入文件
// fs.writeFile('写入的文件的路径', 要写入的数据, 回调)

fs.writeFile('./test.txt', '晓飞,李晶,都是lsp',{
    flag: 'a' // 默认flag的值是w,写入的内容会覆盖原来的内容. 如果改成a,就会从后面添加,而不会覆盖
}, (err)=>{
    if(err) console.log(err);
    else console.log('写入成功');
})