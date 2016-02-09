"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

console.log("Hello World");
require("babel-polyfill");
var request = require('request');

var es6Test = function es6Test() {
  return "yes";
};

var getSwanson = function getSwanson() {
  var quote;

  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      quote = body;

      resolve(quote);
    });
  });
};

var swanson = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var quote;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getSwanson();

          case 2:
            quote = _context.sent;

            console.log(quote);
            return _context.abrupt("return", quote);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function swanson() {
    return ref.apply(this, arguments);
  };
}();

var getJeopardy = function getJeopardy() {
  return new Promise(function (resolve, reject) {
    request('http://jservice.io/api/random', function (err, res, body) {
      JSON.parse(body);
      resolve(body);
    });
  });
};

var jeopardy = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var question;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getJeopardy();

          case 2:
            question = _context2.sent;

            console.log(question);
            return _context2.abrupt("return", question);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function jeopardy() {
    return ref.apply(this, arguments);
  };
}();

// test

module.exports = {
  es6Test: es6Test,
  swanson: swanson,
  jeopardy: jeopardy
};