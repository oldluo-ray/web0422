const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.get('/test', (req,res)=>{
    console.log(req.query);
    setTimeout(() => {
        res.send('ok-get')
    }, 2000);
   
})
app.post('/test', (req,res)=>{
    console.log(req.body);
    setTimeout(() => {
        res.send('ok-post')
    }, 2000);
   
})
app.listen(5000,()=>{
    console.log('ok');
   
})