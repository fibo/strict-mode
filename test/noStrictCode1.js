/**
 * This function contains code that throws if strict mode is enabled.
 *
 * It is imported by test.js and wrapped by strict-mode so it throws.
 *
 * @credits code stolen from MDN ( where M stands for Mozilla, not Microsoft :)
 */

function noStrictCode1 () {
  // Assignment to a non-writable property
  var obj1 = {}
  Object.defineProperty(obj1, 'x', { value: 42, writable: false })
  obj1.x = 9 // throws a TypeError

  // Assignment to a getter-only property
  var obj2 = { get x () { return 17 } }
  obj2.x = 5 // throws a TypeError
}

module.exports = noStrictCode1
