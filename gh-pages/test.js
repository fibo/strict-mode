(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// IN browserify context, fall back to a no op
module.exports = function (cb) { cb() }


},{}],2:[function(require,module,exports){

require('strict-mode')(function () {
  console.log('import no strict code')
  require('./noStrictCode')
})


},{"./noStrictCode":3,"strict-mode":4}],3:[function(require,module,exports){

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


},{}],4:[function(require,module,exports){

// Cheating npm require.
module.exports = require('../..')


},{"../..":1}]},{},[2]);
