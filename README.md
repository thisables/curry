:curry: Chickencurry
============
[![Build Status](https://travis-ci.org/stoeffel/chickencurry.svg)](https://travis-ci.org/stoeffel/chickencurry) [![npm version](https://badge.fury.io/js/chickencurry.svg)](http://badge.fury.io/js/chickencurry) <object data="./coverage.svg" type="image/svg+xml"> </object>
> Add some chickencurry to your functions

Library to [curry](http://en.wikipedia.org/wiki/Currying) a function.
It supports auto rurrying, currying a number of arguments, placeholders and partial applications.


Installation
------------

`npm install chickencurry`

Usage
-----

### Basic usage

```js
var curry = require('chickencurry');

function add(a, b) {
  return a + b;
}
var add1 = curry(add)(1);

add1(3); // => 4
add1(4); // => 5
```

### Curry n arguments

```js
var curryN = require('chickencurry/N');

function join() {
  return Array.prototype.slice.call(arguments).join();
}

curryN(join, 3)(1)(2)(3) // => '1,2,3'
```

### Curry 1,2 or 3 arguments

```js
var curry1 = require('chickencurry/1');
var curry2 = require('chickencurry/2');
var curry3 = require('chickencurry/3');

curry1(join)(1) // => '1'
curry2(join)(1)(2) // => '1,2'
curry3(join)(1)(2)(3) // => '1,2,3'
```

### Partial applications

```js
var curryN = require('chickencurry/N');

function join() {
  return Array.prototype.slice.call(arguments).join();
}

curryN(join, 3, 'Fish', 'Chicken')('...'); // => 'Fish,Chicken,...')
curryN(join, 3)('Fish', 'Chicken')('...'); // => 'Fish,Chicken,...')
```

### Placeholder

You can curry a function using placeholders, if you want to set the i.e 3rd argument.

```js
function join(a, b, sep) {
  return a + sep + b;
};

var __ = require('chickencurry/__');

var join_ = curry(join, __, __, '_'); 
// or var join_ = curry(join, undefined, undefined, '_'); 

join_('chicken', 'curry'); // => 'chicken_curry'


var joinCurry = curry(join); 
var joinDash = joinCurry(__, __, '-');

joinDash('chicken', 'curry'); // => 'chicken-curry'
```
