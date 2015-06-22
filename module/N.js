import { curry } from './lib/curry';


export default (fn, length, ...args) => curry(fn, length, args);
