# strict-mode

> enables strict mode in your package

[![NPM version](https://badge.fury.io/js/strict-mode.svg)](http://badge.fury.io/js/strict-mode) [![Build Status](https://travis-ci.org/fibo/strict-mode.svg?branch=master)](https://travis-ci.org/fibo/strict-mode.png?branch=master) [![Dependency Status](https://gemnasium.com/fibo/strict-mode.svg)](https://gemnasium.com/fibo/strict-mode)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![NPM](https://nodei.co/npm-dl/strict-mode.png)](https://nodei.co/npm-dl/strict-mode/)

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install strict-mode
```

## Usage

**Please note that this package is intended to be used server side.**
If used with [browserify](http://browserify.org/) it is a [no op](https://github.com/fibo/strict-mode/blob/master/browser.js).

Suppose that the *main attribute* in your *package.json* is *index.js*.

If you want that all the modules in your package has strict mode enabled,
just wrap your *index.js* this way

```js
require('strict-mode')(function () {

// your index.js content

// every *require* call inside this function will have strict mode enabled

})
```

## Motivation

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) is a best practice but adding a `"use strict";` on top of every *.js* file in your package could

* require a big effort
* be error proning
* make complain jshint
* be a problem when concatenating files

On the other hand the [use-strict] package solution is too invasive, cause
it applies strictness to **all** future modules loaded.

## Use case

At the time of this writing [Node v4 stable](https://nodejs.org/en/blog/release/v4.0.0/) version was released few days ago.
Finally we can use `class`, `let`, `const` (among other new exciting features) but you will notice that if you do not turn on strict mode an exception will raise.
For instance, a file *Point2d.js* with content

```
class Point2d {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

module.exports = Point2d
```

when imported will complain

```
SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

but if you wrap the import with *strict-mode* everything will just work

```
require('strict-mode')(function () {

  var Point2d = require('./Point2d')
  // require all other classes you need.

  // You can also export them safely
  exports.Point2d = Point2d
})
```

## Bonus tip

Usually you write tests importing your library. You can do that in two ways:

* using `require('../../path/to/my/module')`
* or setting `NODE_PATH=src` and using `require('my/module')`

In both cases you miss the feature provided by *strict-mode*, but, you can
use this nasty trick ( to cheat npm :^)

Assuming you package name is, emh *package-name*, create a file
*test/node_modules/package_name/index.js* containing

```javascript
module.exports = require('../../..')
```

See for example [test/node_modules/strict-mode/index.js](https://github.com/fibo/strict-mode/blob/master/test/node_modules/strict-mode/index.js)
used in this package.

Then you can use `require('package-name')` in your tests.

## Credits

Code **stolen** from isaacs' [use-strict].

## License

[MIT](http://g14n.info/mit-license)

[use-strict]: https://npmjs.org/package/use-strict
