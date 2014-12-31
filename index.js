var __ = undefined;

module.exports = function(fn) {
  var curriedArgs = Array.prototype.slice.call(arguments, 1);

  return function() {
    var args = Array.prototype.slice.call(arguments),
        iArgs = 0,
        mergedArgs = curriedArgs.slice(0);

    for (var i = 0; i < curriedArgs.length; i++) {
      if (curriedArgs[i] === __) {
        mergedArgs[i] = args[iArgs];
        iArgs = iArgs + 1;
      }
    }

    return fn.apply(null, mergedArgs.concat(args.slice(iArgs)));
  }
};

module.exports.__ = __;
