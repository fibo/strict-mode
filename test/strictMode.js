
var module     = require('module')
  , should     = require('should')
  , strictMode = require('../index')

var origWrapper = '(function (exports, require, module, __filename, __dirname) { '

describe('strict-mode', function () {
  describe('origWrapper', function () {
    it('is the same as module.wrapper[0]', function () {
      module.wrapper[0].should.be.eql(origWrapper)
    })
  })

  describe('callback', function () {
    it('must be a function', function () {
      ;(function () {
        strictMode('foo')
      }).should.throwError('Not a function')
    })
  })

  describe('invocation', function () {
    it('cannot be a nested', function () {
      strictMode(function () {
        ;(function () {
          strictMode(function () {
            // export something
          })
        }).should.throwError('Nested strict-mode calls')
      })
    })
  })
})

