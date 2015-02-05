import curry from './lib/curry';


export default function(fn, length, ...args) {
  return curry(fn, length, args);
}
