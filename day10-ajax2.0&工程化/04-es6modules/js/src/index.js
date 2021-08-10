// module1是统一导出, 所以导入时的固定格式是: import {} from '路径'
// 花括号中的变量名必须和导出时的变量名一致
import { fn, obj, num } from './module1'
// module2是分别导出,导入的格式和统一导出的引入格式是一样的
// 注意: 引入时,如果变量名冲突,可以使用as对变量名进行重命名. 重命名之后, 之前的名字就不能用了
import { a, fn as fn1, obj as obj1 } from './module2'

// 默认导出的代码,导入时,不需要写花括号. 并且可以随意定义名称
import fn2 from './module3'

// 导入一个混合了三种导出方式的js文件
// 注意: 要先写默认导出的代码,再写其他两种方式导出的代码
import module4, { test, xxx } from './module4'

fn()
console.log(obj)
console.log(a)
fn1()
console.log(obj1)
console.log(num)
fn2()

console.log(module4)
console.log(xxx)
console.log(test)
