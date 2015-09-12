# strict-mode

> enables strict mode in your package

[![NPM version](https://badge.fury.io/js/strict-mode.png)](http://badge.fury.io/js/strict-mode) [![Build Status](https://travis-ci.org/fibo/strict-mode.png?branch=master)](https://travis-ci.org/fibo/strict-mode.png?branch=master) [![Dependency Status](https://gemnasium.com/fibo/strict-mode.png)](https://gemnasium.com/fibo/strict-mode)

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install strict-mode
```

## Usage

Suppose that the *main attribute* in your *package.json* is *index.js*.

If you want that all the modules in your package has strict mode enabled,
just wrap your *index.js* this way

```js
require('strict-mode')(function () {

// your index.js content

// every *require* call inside this function will have strict mode enabled

})
```

Please note that this package is intended to be used server side. I could not
find a way to extend its feature client side: hints and suggestions are welcome,
[contact me](http://g14n.info) if any.

## Motivation

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) is a best practice but adding a `"use strict";` on top of every *.js* file in your package could

* require a big effort
* be error proning
* make complain jshint
* be a problem when concatenating files

On the other hand the [use-strict][1] package solution is too invasive, cause
it applies strictness to **all** future modules loaded.

## Use case

At the time of this writing [Node v4 stable](https://nodejs.org/en/blog/release/v4.0.0/) version was released few days ago.
Finally we can use `class`, `let`, `const` (among other new exciting features) but you will notice that it you do not turn on strict mode an exception will raise.
For instance, if you import file *Point2d.js* with content

```
class Point2d {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

module.exports = Point2d
```

## Credits

Code **stolen** from isaacs' [use-strict][1].

## License

[MIT](http://g14n.info/mit-license)

[1]: https://npmjs.org/package/use-strict

