# strict-mode

> enables strict mode in your package

![No deps](https://fibo.github.io/svg/badges/dependencies-none.svg)

## Usage

**Please notice that this package is intended to be used server-side and with CommonJS only.**

Suppose that the *main attribute* in your *package.json* is *index.js*.
If you want all the modules in your package to have strict mode enabled,
just wrap your *index.js* this way

```javascript
require('strict-mode')(function () {

// your index.js content

// every *require* call inside this function will have strict mode enabled

})
```

## Motivation

[Strict mode][MDN_Strict_mode] is a best practice but adding a `"use strict";` on top of every *.js* file in your package could

* require a big effort
* be error-prone
* make linters complain (like eslint, jshint, etc.)
* be a problem when concatenating files

On the other hand, the [use-strict] package solution is too invasive, because it applies strictness to **all** future modules loaded.

## Use case

At the time of this writing, [Node v4 stable](https://nodejs.org/en/blog/release/v4.0.0/) version was released a few days ago.
Finally we can use `class`, `let`, `const` (among other new exciting features) but you will notice that if you do not turn on strict mode, an exception will be raised.
For instance, a file *Point2d.js* with content

```javascript
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

but if you wrap the import with *strict-mode*, everything will just work

```javascript
require('strict-mode')(function () {

  var Point2d = require('./Point2d')
  // require all other classes you need.

  // You can also export them safely
  exports.Point2d = Point2d
})
```

## Bonus tip

You could use *strict-mode* just as a development dependency.

Following the instructions below, you are not going to deploy *strict-mode* to production, but when you run your tests, **if some code is not strict, then you will get an error**.

Suppose you have the following folder structure in your package.

    .
    ├── package.json
    ├── src
    │   └── index.js    # your package.json `main` entry
    └── test
        ├── test1.js
        └── test2.js

Assuming your package name is, hmm, *my-package*, create a file *test/my-package.js* containing

```javascript
require('strict-mode')(function () {
  module.exports = require('../src/index.js')
})
```

Now if you set the environment variable `NODE_PATH=test`, you can use `require('my-package')` in your tests.

For instance if you are using Node built-in *Test runner* you can add this to your *package.json*

```json
    "test": "NODE_PATH=test node --test"
```

## Credits

Code **stolen** from isaacs' [use-strict].
A big thanks to [MDN](https://developer.mozilla.org) because it is an awesome knowledge base for everything related to the Web: in particular, I could find some valid counterexamples of strict mode to include in my tests.

## License

[MIT](https://github.com/fibo/strict-mode/blob/main/LICENSE)

[MDN_Strict_mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[test/node_modules/strict-mode/index.js]: https://github.com/fibo/strict-mode/blob/main/test/node_modules/strict-mode/index.js
[use-strict]: https://npmjs.org/package/use-strict "use-strict"
