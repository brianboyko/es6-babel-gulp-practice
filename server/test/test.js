require("babel-polyfill");

var should = require('should');
var assert = require('assert');
var { es6Test, swanson, jeopardy, makeHash, codeGenerator } = require('../dist/js/index.js');
var { codeGenerator } = require ('../dist/js/util.js')

describe('Babel/ES6/7 test', function(){
  it('should return "yes" when called', function(){
    assert.equal("yes", es6Test());
  })
})


describe('functional functions', function(){
  it('should create a 4-letter room code', function(){
      var roomCode = codeGenerator();
      should.exist(roomCode);
      console.log("roomcode", roomCode); 
      assert.equal(4, roomCode.length); 
      
  })
})

describe('Asynchronous functions', function(){

  it('should get a Ron Swanson Quote', async function(){
    var quote = await swanson();
    console.log("ron quote", quote)
    should.exist(quote);
  })

  it('should get a Jeopardy Question', async function(){
    var ques = await jeopardy();
    console.log("jeopardy in test", ques); 
    should.exist(ques);
  })

  it('should generate a bcrypt hash', async function(){
      var hash = await makeHash('password');
      should.exist(hash);
  })

})

