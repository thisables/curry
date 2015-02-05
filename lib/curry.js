"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = curry;
var countDefinedItems = _interopRequire(require("./countDefinedItems"));

var merge = _interopRequire(require("./merge"));

function curry(fn, length, curryArgs) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var concatArgs = curryArgs.concat(args),
        mergedArgs = [];

    if (length <= countDefinedItems(concatArgs)) {
      mergedArgs = merge(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      if (length >= concatArgs.length) {
        return curry(fn, length, concatArgs);
      } else {
        return curry(fn, length, merge(args, curryArgs));
      }
    }
  };
}