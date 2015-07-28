import placeholder from './module/_';
import curry_ from './module/curry';

export const _ = placeholder({Symbol});
export const curry = curry_({_});
