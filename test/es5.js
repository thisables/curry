import test from 'tape-catch';

const Symbol = require('es6-symbol');
const {curry, _} = require('../module/index')({Symbol});

test('The API is in good shape.', (is) => {
  is.equal(
    typeof curry,
    'function',
    '`curry_` is a function'
  );
  is.end();
});

test('basic usage', (is) => {
  const sum = (a, b, c) => a + b + c;

  is.equal(
    sum::curry()(1, 2, 3),
    6,
    'curries a function'
  );

  is.equal(
    sum::curry(1)(2, 3),
    6,
    'curries a function'
  );

  is.equal(
    sum::curry(1, 2)(3),
    6,
    'curries a function'
  );

  is.equal(
    sum::curry(1)(2)(3),
    6,
    'curries a function'
  );
  is.end();
});
test('placeholders', (is) => {
  const strJoin = (a, b, c) => '' + a + b + c;

  is.equal(
    strJoin::curry()(1, 2, 3),
    '123',
    'curries a function'
  );

  is.equal(
    strJoin::curry(1, _, 3)(2),
    '123',
    'curries a function'
  );

  is.equal(
    strJoin::curry(_, _, 3)(1)(2),
    '123',
    'curries a function'
  );

  is.equal(
    strJoin::curry(_, 2, _)(1)(3),
    '123',
    'curries a function'
  );

  const shaved = strJoin::curry(_, _);
  is.equal(
    shaved.length,
    2,
    'handles length properly, …'
  );

  is.equal(
    shaved('A').length,
    1,
    '…even after partial application'
  );

  is.equal(
    shaved('A', 'B', 'C'),
    'ABundefined',
    'shaves off extra parameters'
  );

  is.end();
});
