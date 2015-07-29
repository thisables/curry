export default (_) => {
  const merge = (dest, origin) => {
    const newArgs = dest.map((i) => {
      let elem = i;
      if (i === _ && origin[0]) {
        elem = origin.shift();
      }
      return elem;
    });

    return newArgs.concat(origin);
  };

  const actualLength = (arr) => {
    return arr.reduce((len, curr) => curr === _ ? len : len + 1, 0);
  };

  function curry(...args) {
    const fn = this;
    const len = fn.length;
    let concatedArgs = args;

    const _curry = (...newArgs) => {
      concatedArgs = merge(concatedArgs, newArgs);
      return ((actualLength(concatedArgs) === len) ?
        fn(...concatedArgs) :
        _curry
      );
    };

    return _curry();
  }
  return curry;
};
