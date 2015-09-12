
/**
 * This function contains code that throws if strict mode is enabled.
 *
 * It is imported by test.js and wrapped by strict-mode so it throws.
 *
 * @credits code stolen from MDN where M stands for Mozilla, not Microsoft :)
 */

module.exports = function noStrictCode () {
  // Assignment to a non-writable property
  var obj1 = {};
  Object.defineProperty(obj1, "x", { value: 42, writable: false });
  obj1.x = 9; // throws a TypeError

  // Assignment to a getter-only property
  var obj2 = { get x() { return 17; } };
  obj2.x = 5; // throws a TypeError

  // Assignment to a new property on a non-extensible object
  var fixed = {};
  Object.preventExtensions(fixed);
  fixed.newProp = "ohai"; // throws a TypeError

  delete Object.prototype; // throws a TypeError
}

