
'use strict'

// All credits goes to isaacs and its use-strict

// module api is Locked, so will not change
// see http://nodejs.org/api/modules.html
// that is why I just copyed and pasted the orig module wrapper
var origWrapper         = '(function (exports, require, module, __filename, __dirname) { '
  , strictWrapper       = origWrapper + '"use strict";'
  , strictModeExecuting = false

module.exports = function strictMode(callback) {
  if (typeof callback !== 'function')
    throw new TypeError()

  // avoid nested require('strict-mode')
  if (strictModeExecuting)
    throw new Error()

  strictModeExecuting = true

  var module = require('module')
  module.wrapper[0] = strictWrapper

  // Every require in this callback will load modules in strict mode.
  callback()

  // Restore orig module wrapper, play well with others.
  module.wrapper[0] = origWrapper
}

