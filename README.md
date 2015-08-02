<h1 align="center">
	<img
		alt="curry-this"
		src="./logo.png"
		width="800px"
		height="400px"
	/>
</h1>

[![Build Status](https://travis-ci.org/stoeffel/curry-this.svg)](https://travis-ci.org/stoeffel/curry-this) [![npm version](https://badge.fury.io/js/curry-this.svg)](http://badge.fury.io/js/curry-this) [![Coverage Status](https://coveralls.io/repos/stoeffel/curry-this/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/curry-this?branch=master)


**Currying made simple.**



– and we really mean simple:

```js
import {curry, _} from 'curry-this/module';


// Got a simple function?

const plus = (a, b, c) => a + b + c;
const plusThree = plus::curry(3);

plusThree(2, 2);  //» 7
plusThree(2)(2);  //» 7


// Got a monster function?

const {open} = require('fs');
const newScript = open::curry(_, 'w', 0755, _);

newScript('do-wonders.sh', (error, file) => {
  // The `file` is ready.
});
```





Installation
------------

```sh
npm install curry-this
```




Usage
---

*Work in progress…*

### Basig usage

The function `curry` is invoked using the [function bind syntax](https://github.com/zenparsing/es-function-bind) and returns a curried function.

```js
const add = (a, b) => a + b;
const curriedAdd = add::curry();

curriedAdd(1)(2); //» 3
```


### Placeholders

A placeholder `_` is a [Symbol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) `Symbol('CURRY-THIS-PLACEHOLDER')`.
Placeholders are replaced from left to right, the next call after a placeholder is passed replaces the previous placeholders one by one.

```js
const foo = (a, b, c, d) => [a, b, c, d];

const curriedFoo = foo::curry(_, _, _, 4); 

curriedFoo(1)(2)(3); //» [1, 2, 3, 4]
```

If you pass a placeholder to `curry` the length of the function is **ignored** instead the initial call of `curry` defines the length of the curried function.

```js
const foo = (...values) => values;

const curriedFoo = foo::curry(_, _, _);

curriedFoo(1)(2)(3); //» [1, 2, 3]
```

API
---

*Work in progress…*


`::` huh?
----

If you’re wondering what the `::` thing means, you’d better read this excellent [overview](https://github.com/jussi-kalliokoski/trine/blob/5b735cbfb6b28ae94bac0446d9ecd5ce51fb149b/README.md#why) by [@jussi-kalliokoski](https://github.com/jussi-kalliokoski) or have a look at the [function bind syntax proposal](https://github.com/zenparsing/es-function-bind).


Maintainers
-----------

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [tomekwi](https://github.com/tomekwi)  |




License
-------

[MIT][] © [Christoph Hermann][]

[MIT]: ./LICENSE.md
[Christoph Hermann]: https://github.com/stoeffel
