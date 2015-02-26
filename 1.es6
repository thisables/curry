import curryN from './N';


export default (fn, ...args) => curryN(fn, 1, ...args);
