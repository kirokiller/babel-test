"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var asyncFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve("🤩ok2");
              }, 2000);
            });

          case 2:
            res = _context.sent;
            console.log(res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFunc() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = asyncFunc;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var aFunc = require("./a.js");

var arrowFunc = function arrowFunc() {
  console.log("arrowFunc");
};

var asyncFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve("🤩ok");
              }, 2000);
            });

          case 2:
            res = _context.sent;
            console.log(res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFunc() {
    return _ref.apply(this, arguments);
  };
}();

asyncFunc();
aFunc();
module.exports = {
  arrowFunc: arrowFunc
};
