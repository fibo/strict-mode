strict-mode
===========

> enables strict mode in your package

# Install

With [npm](https://npmjs.org/) do

```bash
npm install package-name
```

# Usage

Suppose your *package.json* main attribute is the `npm init` default *index.js*.

If you want that all the modules in your package has strict mode enabled,
just wrap your *index.js* this way

```
require('strict-mode')(function () {

// your index.js content

// every *require* call inside this function will have strict mode enabled

})
```

# Motivation

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) is a best practice most of developers will agree.

Adding a `"use strict";` on top of every *.js* file in your package could

* require a big effort
* be error proning
* make complain jshint
* be a problem when concatenating files

On the other hand the [use-strict][1] package solution is too invasive, cause
it makes **all** modules in Node get loaded in strict mode.

# Credits

Code  **stolen**   from isaacs' [use-strict][1].

# License

[MIT](http://fibo.mit-license.org/)

  [1]: https://npmjs.org/package/use-strict

