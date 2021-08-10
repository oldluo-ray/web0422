const mongoose = require('mongoose')
// 直接导出连接的promise对象
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0422')