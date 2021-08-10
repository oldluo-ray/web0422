let fn = () => {
    console.log('fn函数执行了');
}

console.log('module2执行了');

// module.exports = fn
// exports.fn = fn
// 注意: 如果使用exports. 一定不要直接给exports赋值新的对象,这样,是无法将数据导出去的
// 因为module.exports和exports如果指向不同,以module.exports为准
exports = {
    fn
}