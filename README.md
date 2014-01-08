strict-mode
===========

> enables strict mode in your package

# Usage

Suppose your *package.json main* attribute is the `npm init` default *index.js*,
just wrap your *index.js* this way

```
require('strict-mode')(function () {

// your index.js content

})
```

