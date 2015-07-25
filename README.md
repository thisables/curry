[![Build Status](https://travis-ci.org/stoeffel/chickencurry.svg)](https://travis-ci.org/stoeffel/chickencurry) [![npm version](https://badge.fury.io/js/chickencurry.svg)](http://badge.fury.io/js/chickencurry) [![Coverage Status](https://coveralls.io/repos/stoeffel/chickencurry/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/chickencurry?branch=master)


:curry: Chickencurry
============

**Currying made simple.**



—and we really mean simple:

```js
const {curry, _} = require('chickencurry');

// Got a simple function?
const plus = (a, b) => a + b;
const plusThree = plus::curry(3);

// Got a monster function?
const {open} = require('fs');
const newScript = open::curry(_, 'w', 0755, _);
```





Installation
------------

```sh
npm install chickencurry
```





API
---

*Work in progress…*
