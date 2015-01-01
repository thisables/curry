var slice = Array.prototype.slice,
    __;

function mergeArguments(args, curryArgs) {
  var mergedArgs = slice.call(curryArgs),
    iArgs = 0;

  for (var i = 0; i < curryArgs.length; i++) {
    if (curryArgs[i] === __) {
      mergedArgs[i] = args[iArgs];
      iArgs = iArgs + 1;
    }
  }
  return mergedArgs.concat(slice.call(args, iArgs));
}

function countArgs(args) {
  var count = 0;
  for (var i = 0; i < args.length; i++) {
    if (args[i] !== __) {
      count = count + 1;
    }
  }
  return count;
}

function recurry(fn, curryArgs) {
  return function() {
    var args = slice.call(arguments),
      mergedArgs = mergeArguments(args, curryArgs);

    if (fn.length <= countArgs(mergedArgs)) {
      return fn.apply(null, mergedArgs);
    } else {
      return recurry(fn, mergedArgs);
    }
  }
}

module.exports = function curry(fn) {
  var curryArgs = slice.call(arguments, 1);

  return recurry(fn, curryArgs);
};

module.exports.__ = __;
