
// The module api is in *Locked* state, so it will not change
// see http://nodejs.org/api/modules.html
// that is why I just copyed and pasted the orig module wrapper.
//
// By the way, in test/strictMode.js there is a test that checks if
// the content of *origWrapper* needs an update.

var origWrapper         = '(function (exports, require, module, __filename, __dirname) { '
  , strictWrapper       = origWrapper + '"use strict";'
  , strictModeExecuting = false

/**
 * Package `exports` wrapper
 *
 * See [Usage](//g14n.info/strict-mode/#usage)
 *
 * @param {Function} callback containing caller package's exports statements
 */

function exportsWrapper (callback) {
  "use strict";

  if (typeof callback !== 'function')
    throw new TypeError('Not a function')

  // Avoid nested require('strict-mode')
  if (strictModeExecuting)
    throw new Error('Nested strict-mode calls')

  strictModeExecuting = true

  var module = require('module')

  if (module.wrapper) {
    if (module.wrapper[0] === origWrapper) {
      module.wrapper[0] = strictWrapper

      // Every require in this callback will load modules in strict mode.
      try {
        callback()
      }
      catch (err) {
          console.error(err.stack)
      }

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

    // TODO can a wrapper switch strict mode on properly on browserify?
    // Something like function(){"use strict";callback();} works?
  }
}

module.exports = exportsWrapper

