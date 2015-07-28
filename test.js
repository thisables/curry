import test from 'tape-catch';

var Symbol = require('es6-symbol');
var { curry, _ } = require('./module/index')({ Symbol });

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
    strJoin::curry(_, 2)(1)(3),
    '123',
    'curries a function'
  );
  
  is.end();
});
