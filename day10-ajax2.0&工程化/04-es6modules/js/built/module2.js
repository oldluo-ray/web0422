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