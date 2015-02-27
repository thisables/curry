import curryN from './N';


export default (fn, ...args) => curryN(fn, 2, ...args);
