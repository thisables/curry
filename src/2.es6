import curry from './lib/curry';


export default (fn, ...args) => curry(fn, 2, args);
