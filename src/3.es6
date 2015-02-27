import curryN from './N';


export default (fn, ...args) => curryN(fn, 3, ...args);
