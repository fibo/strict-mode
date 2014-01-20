strict-mode
===========

> enables strict mode in your package

# Usage

Suppose your *package.json main* attribute is the `npm init` default *index.js*.

If you want that all the modules in your package has strict mode enabled,
just wrap your *index.js* this way

```
require('strict-mode')(function () {

// your index.js content

})
```

