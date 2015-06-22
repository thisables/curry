let _merge = (args, i) =>
  (typeof i === 'undefined')?
    args.shift():
    i;

export default (args, curryArgs) => curryArgs.map(i => _merge(args, i)).concat(args);