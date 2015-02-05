"use strict";

function _merge(args, i) {
  if (typeof i === "undefined") {
    return args.shift();
  } else {
    return i;
  }
}

module.exports = function merge(args, curryArgs) {
  return (function () {
    var _concat = [];

    for (var _iterator = curryArgs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }
      var i = _ref;
      _concat.push(_merge(args, i));
    }

    return _concat;
  })().concat(args);
};