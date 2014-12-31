var slice = Array.prototype.slice,
    __;

function mergeArguments(args, curriedArgs) {
  var mergedArgs = slice.call(curriedArgs),
    iArgs = 0;

  for (var i = 0; i < curriedArgs.length; i++) {
    if (curriedArgs[i] === __) {
      mergedArgs[i] = args[iArgs];
      iArgs = iArgs + 1;
    }
  }
  return mergedArgs.concat(slice.call(args, iArgs));
}

module.exports = function(fn) {
  var curriedArgs = slice.call(arguments, 1);

  return function() {
    var args = slice.call(arguments),
      mergedArgs = mergeArguments(args, curriedArgs);

    return fn.apply(null, mergedArgs);
  };
};

module.exports.__ = __;
