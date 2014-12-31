Chickencurry
============
[![Build Status](https://travis-ci.org/stoeffel/chickencurry.svg)](https://travis-ci.org/stoeffel/chickencurry) [![npm version](https://badge.fury.io/js/chickencurry.svg)](http://badge.fury.io/js/chickencurry)

> Add some chickencurry to your functions

Installation
------------

`npm install chickencurry`

Usage
-----

```js
var curry = require('chickencurry');

function add(a, b) {
  return a + b;
}
var add1 = curry(add, 1);
var add12 = curry(add, 1, 2);

add1(3); // => 4
add12(); // => 3

function join(a, b, sep) {
  return a + sep + b;
};

var __ = curry.__;
var join_ = curry(join, __, __, '_');

join_('chicken', 'curry'); // => 'chicken_curry'
```
