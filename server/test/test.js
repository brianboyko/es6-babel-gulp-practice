var should = require('should');
var assert = require('assert');


var mainFile = require('../dist/js/index.min.js');
var es6Test = mainFile.es6Test;
var swanson = mainFile.swanson;
var jeopardy = mainFile.jeopardy;
var makeHash = mainFile.makeHash; 

describe('ES6: Const & Arrow Notation Test', function(){
  it('should return "yes" when called', function(){
    assert.equal("yes", es6Test());
  })
})

describe('ES7: Async/Await Test', function(){

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
})

describe('Bcrypt Hashing', function(){

  it('should generate a hash', async function(){
    var hash = await makeHash('password');
    should.exist(hash);
  })

})