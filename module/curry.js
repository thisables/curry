export default (_) => {
  const merge = function(dest, origin) {
    var newArgs = dest.map((i, k) => {
      var elem = i;
      if (i == _ && origin[0]) {
        elem = origin.shift();
      }
      return elem;
    });

    return newArgs.concat(origin);
  };

  const actualLength = function(arr) {
    return arr.reduce((len, curr) => curr == _? len: len+1, 0);
  };

  const curry = function(...args) {
    const fn = this;
    const len = fn.length;
    let concatedArgs = args;

    function _curry(...newArgs) {
      concatedArgs = merge(concatedArgs, newArgs);
      if (actualLength(concatedArgs) === len) return fn(...concatedArgs);
      else return _curry;
    };

    return _curry();
  };
  return curry;
};

