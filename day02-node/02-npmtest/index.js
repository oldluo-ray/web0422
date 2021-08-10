// 引入node_modules中的第三方包的时候,默认在当前项目的根目录中查找,如果当前项目的根目录没有node_modules,就会沿着文件夹一直往上找, 直到找到盘符根目录,如果还没有就报错
// 注意: 如果把本地包,放到全局包的位置,没有用. 还是找到盘符根目录就不找了
const uniq = require('uniq')
let arr = [1,2,2,1]
uniq(arr)
console.log(arr);