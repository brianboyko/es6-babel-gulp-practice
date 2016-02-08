// ############################
// THIS IS WRITTEN IN ES4
// ############################

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(0, [1, 2, 3].indexOf(1));
    });
  });
});

var mainFile = require('../public/index.js');
var es6Test = mainFile.es6Test;

describe('ES6: Const & Arrow Notation Test', function(){
  it('should return "yes" when called', function(){
    assert.equal("yes", es6Test());
  })
})