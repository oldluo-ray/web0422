(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log(1 === 2)
(0, _module["default"])();
console.log(_module2.test);
console.log(123);
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default() {
  console.log('module1的函数');
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;
var test = 'test';
exports.test = test;
},{}]},{},[1])