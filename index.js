var merge = require('./lib/merge'),
    countDefinedItems = require('./lib/countDefinedItems'),
    slice = Array.prototype.slice,
    __;


function curry(fn, curryArgs) {
  return function() {
    var args = slice.call(arguments),
      mergedArgs = [];

    if (fn.length <= countDefinedItems(curryArgs.concat(args))) {
      mergedArgs = merge(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      mergedArgs = curryArgs.concat(args);
      if (fn.length >= mergedArgs.length) {
        return curry(fn, mergedArgs);
      } else {
        return curry(fn, merge(args, curryArgs));
      }
    }
  };
}

module.exports = function(fn) {
  var args = slice.call(arguments, 1);

  return curry(fn, args);
};

module.exports.__ = __;
