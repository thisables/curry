import countDefinedItems from './countDefinedItems';
import merge from './merge';


export function curry(fn, length, curryArgs) {
  return (...args) => {
    var concatArgs = curryArgs.concat(args),
      mergedArgs = [];

    if (length <= countDefinedItems(concatArgs)) {
      mergedArgs = merge(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      if (length >= concatArgs.length) {
        return curry(fn, length, concatArgs);
      } else {
        return curry(fn, length, merge(args, curryArgs));
      }
    }
  };
}

