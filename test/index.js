var module = require('module')
var strictMode = require('strict-mode')
var test = require('tape')

var origWrapper = '(function (exports, require, module, __filename, __dirname) { '

test('strict-mode', function (t) {
  t.plan(2)

  t.equal(module.wrapper[0], origWrapper, 'origWrapper is unchanged')

  strictMode(function () {
    t.throws(require('./noStrictCode'))
  })
})
