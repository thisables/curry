:curry: Chickencurry
============
[![Build Status](https://travis-ci.org/stoeffel/chickencurry.svg)](https://travis-ci.org/stoeffel/chickencurry) [![npm version](https://badge.fury.io/js/chickencurry.svg)](http://badge.fury.io/js/chickencurry)
> Add some chickencurry to your functions

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
