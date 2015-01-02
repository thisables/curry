var map = require('./map');

module.exports = function merge(args, curryArgs) {
  var mergedArgs = [];

  mergedArgs = map(curryArgs, function(key, item) {
    if (typeof item === 'undefined') {
      return args.shift();
    } else {
      return item;
    }
  });

  return mergedArgs.concat(args);
};
