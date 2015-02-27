import curry from './lib/curry';


export default (fn, ...args) => curry(fn, fn.length, args);
