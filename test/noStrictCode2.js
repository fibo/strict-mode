/**
 * This function contains code that throws if strict mode is enabled.
 *
 * It is imported by test.js and wrapped by strict-mode so it throws.
 *
 * @credits code stolen from MDN ( where M stands for Mozilla, not Microsoft :)
 */

function noStrictCode2 () {
  // Assignment to a new property on a non-extensible object
  var fixed = {}
  Object.preventExtensions(fixed)
  fixed.newProp = 'ohai' // throws a TypeError

  delete Object.prototype // throws a TypeError
}

module.exports = noStrictCode2
