import {curry} from '../module';

const test = require('tape-catch');

const title = (what) => `${what} in an ES 2016 environment`;

const weirdMath = (a, b, c) => a - b / c;
  // The order of arguments must be significant here.

test(title(
  'Does plain currying with fixed-arity functions'
), ({equal, end}) => {
  const weird = weirdMath::curry();

  equal(
    weird(5, 3, 1),
    2,
    'with one group of args'
  );

  equal(
    weird(5)(3, 1),
    2,
    'with two groups of args'
  );

  equal(
    weird(5, 3)(1),
    2,
    'with two groups of args'
  );

  equal(
    weird(5)(3)(1),
    2,
    'with three groups of args'
  );

  end();
});

test(title(
  'Does partial application with fixed-arity functions'
), ({equal, end}) => {
  const moreWeird = weirdMath::curry(8);

  equal(
    moreWeird(4, 2),
    6,
    'with one group of args'
  );

  equal(
    moreWeird(4)(2),
    6,
    'with two groups of args'
  );

  end();
});
