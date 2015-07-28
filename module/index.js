import placeholder from './_';
import curryFunction from './curry';

export default ({Symbol}) => {
  const _ = placeholder({Symbol});
  const curry = curryFunction(_);

  return {_, curry};
};
