Chickencurry
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
var add1 = curry(add, 1);
var add12 = curry(add, 1, 2);

add1(3); // => 4
add12(); // => 3
```

### Placeholder

You can curry a function using placeholders, if you want to set the i.e 3rd argument.

```js
function join(a, b, sep) {
  return a + sep + b;
};

var __ = curry.__;
var join_ = curry(join, __, __, '_'); 
// or var join_ = curry(join, undefined, undefined, '_'); 

join_('chicken', 'curry'); // => 'chicken_curry'
```

### Function scope

If you want to curry a method of an object you have to bind the scope to the function.

```js
var obj = {
  name: 'stoeffel',
  myFunc: function(arg) {
    return arg + this.name;
  }
};

var myFunc = curry(obj.myFunc.bind(obj), 'Hello ');
myFunc(); // => 'Hello stoeffel'
```
