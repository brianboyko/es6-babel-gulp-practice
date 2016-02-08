"use strict";

console.log("Hello World");

var es6Test = function es6Test() {
  return "yes";
};

console.log(es6Test());

module.exports = {
  es6Test: es6Test
};