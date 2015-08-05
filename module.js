import placeholder from './module/_';
import curryFunction from './module/curry';

export const _ = placeholder({Symbol});
export const curry = curryFunction({placeholder: _});
