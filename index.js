var slice = Array.prototype.slice,
    __;

function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(i, arr[i]);
  }
}

function map(arr, fn) {
  var newArr = [];

  forEach(arr, function(key, item) {
    newArr.push(fn(key, item));
  });

  return newArr;
}

function mergeArguments(args, curryArgs) {
  var mergedArgs = [];

  mergedArgs = map(curryArgs, function(key, item) {
    if (item === __) {
      return args.shift();
    } else {
      return item;
    }
  });

  return mergedArgs.concat(args);
}

function countArgs(args) {
  var count = 0;

  forEach(args, function(key, item) {
    if (item !== __) {
      count = count + 1;
    }
  });

  return count;
}

function recurry(fn, curryArgs) {
  return function() {
    var args = slice.call(arguments),
      mergedArgs = [];

    if (fn.length <= countArgs(curryArgs.concat(args))) {
      mergedArgs = mergeArguments(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      return recurry(fn, curryArgs.concat(args));
    }
  };
}

module.exports = function curry(fn) {
  var args = slice.call(arguments, 1);

  return recurry(fn, args);
};

module.exports.__ = __;
