function _merge(args, i) {
  if (typeof i === 'undefined') {
    return args.shift();
  } else {
    return i;
  }
}

module.exports = function merge(args, curryArgs) {
  return [for (i of curryArgs) _merge(args, i)].concat(args);
};
