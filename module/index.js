import placeholder from './_';
import curryFunction from './curry';

export const polyfill = ({Symbol}) => {
  const _placeholder = placeholder({Symbol});
  return {
    _: _placeholder,
    curry: curryFunction({placeholder: _placeholder})
  };
};

export const _ = placeholder({Symbol});
export const curry = curryFunction({placeholder: _});
