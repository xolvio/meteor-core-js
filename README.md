# xolvio:core-js

Use (nearly) all ES2015 and ES2016 APIs now.
This package wraps the excellent [core-js](https://github.com/zloirock/core-js)
and brings it to Meteor apps.

While Meteor 1.2 has ES2015 support, it does not ship with all polyfills
for the ES2015 (and ES2016) APIs [yet](https://github.com/meteor/meteor/issues/5277).

## How to use

Add `xolvio:corejs` on the top of your .meteor/packages file in your app.

## Maintenance

### How to build core-js.js

```sh
npm i -g grunt-cli
npm i core-js
cd node_modules/core-js && npm i
grunt build:es6,es7,js,web --blacklist=es6.number.constructor,es6.map,es6.set,es6.promise --path=core-js
```

### Excludes

* es6.number.constructor: It breaks `check(123, Number)`.
* es6.map, es6.set: Already shipped with  the package `ecmascript-collections`.
* es6.promise: Already shipped with the package `promise`.
