import curryFunction from './curry';

// The placeholder could be any uniquely identifiable object.
// Its contents are irrelevant.
// We provide it with a `placeholder` property only to make it easier to
// see what it is in a debugger window, for example.
export const _ = {placeholder: 'curry-this'};

export const curry = curryFunction({placeholder: _});
