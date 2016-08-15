# defaults-deep-preserve-arrays

This repo is deprecated. Please use [@nodeutils/defaults-deep](https://www.npmjs.com/package/@nodeutils/defaults-deep)

Similar to lodash's defaultsDeep, but without mutating the source object, and no merging of arrays


## Installation

Install the package via `npm`:

```
$ npm install defaults-deep-preserve-arrays
```

## Usage

#### Arguments
2. `[sources]` *(...Object)*: The source objects. Provide 2 or more, in descending order of importance

#### Returns
*(Object)*: Returns the merged objects

#### Example
```js
var defaultsDeep = require('defaults-deep-preserve-arrays');

var objectA = { bar: { biz: { net: 'txi', qox: 'fuc' } }, qux: ['baz'] };
var objectB = { bar: { biz: { net: 'qux'} }, qux: ['biz', 'ban'] };
var objectC = { bar: { biz: { net: 'qux', lee: 'sox' } }, qux: ['biz', 'rep'], foo: 'bar' };

defaultsDeep(objectA, objectB, objectC);
// => { bar: { biz: { net: 'qux', qox: 'fuc', lee: 'sox' } }, qux: ['baz'], foo: 'bar' }
```

###How
Incredibly simple:
```js
"use strict";
const _ = require("lodash");
module.exports = function () {
    let output = {};
    _.toArray(arguments).reverse().forEach(item=> {
        _.mergeWith(output, item, (objectValue, sourceValue) => {
            return _.isArray(sourceValue) ? sourceValue : undefined;
        });
    });
    return output;
};
```
