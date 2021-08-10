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