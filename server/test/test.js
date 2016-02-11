// ############################
// THIS IS WRITTEN IN ES4
// ############################
var should = require('should');
var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//       assert.equal(0, [1, 2, 3].indexOf(1));
//     });
//   });
// });

var mainFile = require('../dist/js/index.min.js');
var es6Test = mainFile.es6Test;
var swanson = mainFile.swanson;
var jeopardy = mainFile.jeopardy;
var makeHash = mainFile.makeHash; 

// describe('ES6: Const & Arrow Notation Test', function(){
//   it('should return "yes" when called', function(){
//     assert.equal("yes", es6Test());
//   })
// // })

// describe('ES7: Async/Await Test', function(){

//   it('should get a Ron Swanson Quote', function(){
//     var quote = swanson();
//     should.exist(quote);
//   })

//   it('should get a Jeopardy Question', function(){
//     var ques = jeopardy();
//     console.log("jeopardy in test", jeopardy); 
//     should.exist(ques);
//   })
// })

describe('Bcrypt Hashing', function(){

  it('should generate a hash', function(){
    var hash = makeHash('password');
    console.log("inside test: ", hash); 
    should.exist(hash);
  })

})