export default (_) => {
  const placeholder = _._ ? _._ : _;

  const merge = (dest, origin) => {
    const newArgs = dest.map((i) => {
      let elem = i;
      if (i === placeholder && origin[0]) {
        elem = origin.shift();
      }
      return elem;
    });

    return newArgs.concat(origin);
  };

  const actualLength = (arr) => {
    return arr.reduce((len, curr) => curr === placeholder ? len : len + 1, 0);
  };

  function curry(...initialArgs) {
    const fn = this;
    const len = fn.length;

    const _curry = (...args) => (...newArgs) => {
      const concatedArgs = merge(args, newArgs);
      return ((actualLength(concatedArgs) === len) ?
        fn(...concatedArgs) :
        _curry(...concatedArgs)
      );
    };

    return _curry(...initialArgs)();
  }
  return curry;
};
