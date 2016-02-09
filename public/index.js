"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

console.log("Hello World");
require("babel-polyfill");
var request = require('request');

var es6Test = function es6Test() {
  return "yes";
};

console.log(es6Test());

function getQuote() {
  var quote;

  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      quote = body;

      resolve(quote);
    });
  });
}

var swanson = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var quote, quotes, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            quotes = [];
            i = 0;

          case 2:
            if (!(i < 3)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return getQuote();

          case 5:
            quote = _context.sent;

            quotes.push(quote);

          case 7:
            i++;
            _context.next = 2;
            break;

          case 10:
            console.log(quotes);
            return _context.abrupt("return", quotes);

          case 12:
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

console.log('Ron once said,');

module.exports = {
  es6Test: es6Test,
  swanson: swanson
};