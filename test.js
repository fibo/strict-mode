
var module     = require('module'),
    strictMode = require('strict-mode'),
    test       = require('tape')

var origWrapper = '(function (exports, require, module, __filename, __dirname) { '

test('strict-mode', function (t) {
  t.plan(2)

  t.equal(module.wrapper[0], origWrapper)

  strictMode(function () {
    t.throws(require('./noStrictCode'))
  })
})

