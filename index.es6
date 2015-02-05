import curry from './lib/curry';


export default function(fn, ...args) {
  return curry(fn, fn.length, args);
}
