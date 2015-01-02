var slice = Array.prototype.slice,
    merge = require('./lib/merge'),
    countDefinedItems = require('./lib/countDefinedItems'),
    __;


function curry(fn, curryArgs) {
  return function() {
    var args = slice.call(arguments),
      mergedArgs = [];

    if (fn.length <= countDefinedItems(curryArgs.concat(args))) {
      mergedArgs = merge(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      return curry(fn, curryArgs.concat(args));
    }
  };
}

module.exports = function(fn) {
  var args = slice.call(arguments, 1);

  return curry(fn, args);
};

module.exports.__ = __;
