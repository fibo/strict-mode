
// The module api is in *Locked* state, so it will not change
// see http://nodejs.org/api/modules.html
// that is why I just copyed and pasted the orig module wrapper.
//
// By the way, in test.js checks if the content of *origWrapper* needs an update.

var origWrapper         = '(function (exports, require, module, __filename, __dirname) { ',
    strictWrapper       = origWrapper + '"use strict";'

/**
 * Wraps module `exports`
 *
 * See [Usage](http://npm.im/strict-mode#usage)
 * )
 *
 * @param {Function} callback containing caller package's exports statements
 */

function strictMode (callback) {
  "use strict";

  if (typeof callback !== 'function')
    throw new TypeError('Argument *callback* must be a function')

  var module = require('module')

  if (module.wrapper) {
    if (module.wrapper[0] === origWrapper) {
      module.wrapper[0] = strictWrapper

      // Every require in this callback will load modules in strict mode.
      try { callback() }
      catch (err) { console.error(err.stack) }

      // Restore orig module wrapper, play well with others.
      module.wrapper[0] = origWrapper
    } else {
      // If module.wrapper[0] changed, do not switch strict mode on.
      callback()
    }
  } else {
    // If you enter here, probably you are using *browserify*
    // which does not define module.wrapper, so do not switch strict mode on.
    callback()
  }
}

module.exports = strictMode

