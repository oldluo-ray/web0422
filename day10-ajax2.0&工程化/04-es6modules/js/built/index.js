'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 默认导出的代码,导入时,不需要写花括号. 并且可以随意定义名称
// module1是统一导出, 所以导入时的固定格式是: import {} from '路径'
// 花括号中的变量名必须和导出时的变量名一致
(0, _module.fn)();

// 导入一个混合了三种导出方式的js文件
// 注意: 要先写默认导出的代码,再写其他两种方式导出的代码

// module2是分别导出,导入的格式和统一导出的引入格式是一样的
// 注意: 引入时,如果变量名冲突,可以使用as对变量名进行重命名. 重命名之后, 之前的名字就不能用了

console.log(_module.obj);
console.log(_module2.a);
(0, _module2.fn)();
console.log(_module2.obj);
console.log(_module.num);
(0, _module4.default)();

console.log(_module6.default);
console.log(_module5.xxx);
console.log(_module5.test);