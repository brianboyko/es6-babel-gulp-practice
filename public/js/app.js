'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

require("babel-polyfill");
var request = require('request');
var bcrypt = require('bcrypt');

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
            return _context.abrupt('return', quote);

          case 4:
          case 'end':
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
            return _context2.abrupt('return', question);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function jeopardy() {
    return ref.apply(this, arguments);
  };
}();

// encryption
var makeHash = function makeHash(password) {
  var hash;
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        resolve(hash);
      });
    });
  });
};

var codeGenerator = function codeGenerator() {
  var possible = "BCDFGHJKLMNPQRSTVWXZ";
  var badWords = ['NGGR', 'NGRR', 'NNGR', 'CVNT', 'FVCK', 'SHJT', 'TWNK'];
  var code = "";
  do {
    for (var i = 0; i < 4; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } while (badWords.indexOf(code) != -1);
  return code;
};

var mainElement = document.getElementById('main');

var doStuff = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var stuff, quote, question;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            stuff = "";

            stuff += "<p>ES6 Test: " + es6Test() + "</p>";
            stuff += "<p>CodeGenerator Test: " + codeGenerator() + "</p>";
            _context3.next = 5;
            return swanson();

          case 5:
            quote = _context3.sent;

            stuff += "<p>Swanson Test: " + quote + "</p>";
            _context3.next = 9;
            return jeopardy();

          case 9:
            question = _context3.sent;

            stuff += "<p>jeopardy Test: " + question + "</p>";
            mainElement.innerHTML = stuff;

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function doStuff() {
    return ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=app.js.map
