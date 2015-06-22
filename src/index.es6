import curry from './lib/curry';


export default function(fn, ...args) {
  if (typeof fn !== 'function') {
    args = [fn].concat(args);
    fn = this;
  }

  return curry(fn, fn.length, args);
};
