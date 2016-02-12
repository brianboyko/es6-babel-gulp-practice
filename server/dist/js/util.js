"use strict";

require("babel-polyfill");

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

module.exports = {
  codeGenerator: codeGenerator
};