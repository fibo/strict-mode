
var origWrapper         = '(function (exports, require, module, __filename, __dirname) { '
  , strictWrapper       = origWrapper + '"use strict";'
  , strictModeExecuting = false

/**
 * Package exports wrapper
 *
 * All credits goes to isaacs and its use-strict package
 * The module api is in *Locked* state, so it will not change
 * see http://nodejs.org/api/modules.html
 * that is why I just copyed and pasted the orig module wrapper.
 *
 * By the way, in test/strictMode.js there is a test that checks if
 * the content of *origWrapper* needs an update.
 *
 * @api private
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
}

module.exports = exportsWrapper

