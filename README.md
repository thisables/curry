[![Build Status](https://travis-ci.org/stoeffel/chickencurry.svg)](https://travis-ci.org/stoeffel/chickencurry) [![npm version](https://badge.fury.io/js/chickencurry.svg)](http://badge.fury.io/js/chickencurry) [![Coverage Status](https://coveralls.io/repos/stoeffel/chickencurry/badge.svg?branch=master)](https://coveralls.io/r/stoeffel/chickencurry?branch=master)


:curry: Chickencurry
============

**Currying made simple.**



– and we really mean simple:

```js
const {curry, _} = require('chickencurry');


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
npm install chickencurry
```





API
---

*Work in progress…*




Maintainers
-----------

[Christoph Hermann]: https://github.com/stoeffel
|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [tomekwi](https://github.com/tomekwi)  |




License
-------

[MIT][] © [Christoph Hermann][]

[MIT]: ./LICENSE.md
