(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fn = function fn() {
  console.log('module1-fn');
};

var obj = {
  xxx: 123
};

var num = 123;

// 统一导出
exports.fn = fn;
exports.obj = obj;
exports.num = num;
// export { obj }
// export { num }
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn = fn;
//这是分别导出. export可以写多次,但是后面必须跟声明语句,不能直接写变量/字面量
var a = exports.a = 123;
function fn() {
  console.log(567);
}
var obj = exports.obj = { age: 18 };
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.log('module3');
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var test = exports.test = 'test';

var xxx = 'xxx';
exports.xxx = xxx;
exports.default = { name: 'zs' };
},{}]},{},[1]);
