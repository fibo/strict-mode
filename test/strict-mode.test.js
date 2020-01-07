var module = require('module')
const test = require('tape')

const origWrapper = '(function (exports, require, module, __filename, __dirname) { '

test('strict-mode', (t) => {
  t.plan(4)

  const Quz = require('./nested').foo.bar.Quz

  const quz = new Quz()

  t.ok(quz.ok, 'nested invocation')

  t.doesNotThrow(() => {
    const noStrictCode1 = require('./noStrictCode1')
    noStrictCode1()
  }, 'running noStrictCode1.js does not throw')

  require('strict-mode')(() => {
    t.throws(() => {
      require('./noStrictCode2')()
    }, 'running noStrictCode2 throws cause required with strict-mode')
  })

  t.equal(module.wrapper[0], origWrapper, 'origWrapper is unchanged')
})
