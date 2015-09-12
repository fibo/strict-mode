
var module     = require('module'),
    strictMode = require('./index'),
    test       = require('tape')

var origWrapper = '(function (exports, require, module, __filename, __dirname) { '

test('strict-mode', function (t) {
  t.plan(2)

  t.equal(module.wrapper[0], origWrapper)

  strictMode(function () {
    t.throws(require('./noStrictCode'))
  })
})

