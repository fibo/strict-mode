# strict-mode

> enables strict mode in your package

[![NPM version](https://badge.fury.io/js/strict-mode.png)](http://badge.fury.io/js/strict-mode) [![Build Status](https://travis-ci.org/fibo/strict-mode.png?branch=master)](https://travis-ci.org/fibo/strict-mode.png?branch=master) [![Dependency Status](https://gemnasium.com/fibo/strict-mode.png)](https://gemnasium.com/fibo/strict-mode)

# Installation

With [npm](https://npmjs.org/) do

```bash
npm install strict-mode
```

# Usage

Suppose that the *main attribute* in your *package.json* is *index.js*.

If you want that all the modules in your package has strict mode enabled,
just wrap your *index.js* this way

```js
require('strict-mode')(function () {

// your index.js content

// every *require* call inside this function will have strict mode enabled

})
```

# Motivation

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) is a best practice but adding a `"use strict";` on top of every *.js* file in your package could

* require a big effort
* be error proning
* make complain jshint
* be a problem when concatenating files

On the other hand the [use-strict][1] package solution is too invasive, cause
it applies strictness to **all** future modules loaded.

# Credits

Code **stolen** from isaacs' [use-strict][1].

# License

[MIT](http://fibo.mit-license.org/)

[1]: https://npmjs.org/package/use-strict

