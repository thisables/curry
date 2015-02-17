let _merge = (args, i) =>
  (typeof i === 'undefined')?
    args.shift():
    i;

export default (args, curryArgs) =>
  [for (i of curryArgs) _merge(args, i)].concat(args);
