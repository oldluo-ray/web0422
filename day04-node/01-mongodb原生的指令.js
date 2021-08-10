

// 每次点击run按钮,这里的所有代码都会执行,如果有些代码不需要执行,就注释掉

// 增加数据: 
// db.user.insert([{name:'xx', age: 30,info: '优秀' },{name:'yy', age: 8,info: '不优秀' }]) // 既可以加一条,也可以加多条
// db.user.insertOne({name:'ls', age: 20,info: '优秀' }) // 只能加一条
// db.user.insertMany([{name:'ww', age: 21,info: '优秀' },{name:'zl', age: 16,info: '不优秀' }]) //用来加多条

// 查找: find(查询条件, 投影) 查询条件决定了查找到多少条数据, 投影决定了展示数据的哪些信息
 
// db.user.find() // 查找当前集合中所有的文档(数据)
// db.user.find({age: 18, name:'zs'})// 查找年龄18并且姓名是zs的数据
// db.user.find({age: {$gt: 10}}) // 年龄大于10岁
// db.user.find({age: {$in:[18,16]}}) // 年龄是18或16岁
// db.user.find({$or:[{age: 20},{name: 'zs'}]}) // 年龄为20或姓名叫zs
// db.user.find({age: {$ne: 20}}) // 年龄不是20岁
// db.user.find({name: /^z/}) //使用正则
// db.user.find({$where: function(){ //可以写回调函数
//     return this.name === 'zs'
// }})
// 不能使用箭头函数
// db.user.find({$where: ()=>{
//     return name === 'zs'
// }})

// db.user.find({},{name:1,_id:0})
// db.user.find({},{info:0})


// 修改: update(查询条件, 要修改的内容, 配置对象)
// db.user.update({info:'优秀'},{$set:{name: 'xiu'}}) // 默认只修改符合条件的第一条(按照添加顺序去找哪个是第一条)
// db.user.update({info:'优秀'},{$set:{name: 'xiu'}},{multi:true}) // 修改所有符合条件的数据

// 删除: remove(查询条件)
// db.user.remove({age: {$gt: 18}})









