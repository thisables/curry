import placeholder from './_';
import curryFunction from './curry';

export default () => {
  const _ = placeholder();
  const curry = curryFunction({placeholder: _});

  return {_, curry};
};
