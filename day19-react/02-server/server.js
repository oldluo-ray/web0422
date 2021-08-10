const express = require('express')
const cors = require('cors')
const app= express()
app.use(cors())

app.get('/test',(req,res)=>{
    let arr = [{name: 'zs', age: 18},{name: 'ls', age: 20},{name: 'wb', age: 16}]
    res.send(arr)
})
app.listen(5000, (err)=>{
    if(err) console.log('失败');
    else console.log('成功');
})