const _module = require('node:module')
const { test } = require('node:test')
const { strict: assert } = require('node:assert')

const origWrapper = '(function (exports, require, module, __filename, __dirname) { '

test('strict-mode', () => {
  const Quz = require('./nested').foo.bar.Quz

  const quz = new Quz()

  assert.ok(quz.ok, 'nested invocation')

  assert.doesNotThrow(() => {
    const noStrictCode1 = require('./noStrictCode1')
    noStrictCode1()
  }, 'running noStrictCode1.js does not throw')

  require('strict-mode')(() => {
    assert.throws(() => {
      require('./noStrictCode2')()
    }, 'running noStrictCode2 throws cause required with strict-mode')
  })

  assert.equal(_module.wrapper[0], origWrapper, 'origWrapper is unchanged')
})
