webpackJsonp([2],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const moduleA = () => {
  console.log('I am module A')
}

/* harmony default export */ __webpack_exports__["default"] = (moduleA);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const moduleB = () => {
  console.log('I am module B')
}

/* harmony default export */ __webpack_exports__["default"] = (moduleB);


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
],[3]);