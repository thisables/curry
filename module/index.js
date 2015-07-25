import placeholder from './_';
import curry_ from './curry_';

export default ({Symbol}) => {
  const _ = placeholder({Symbol});
  const curry = curry_(_);

  return {_, curry};
};
