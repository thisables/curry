import placeholder from './_';
import curryFunction from './curry';

export const _ = placeholder();
export const curry = curryFunction({placeholder: _});

