require("babel-polyfill");
var request = require('request');
var bcrypt = require('bcrypt');

const es6Test = () => "yes";

var getSwanson = function() {
  var quote;
 
  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      quote = body;
 
      resolve(quote);
    });
  });
}
 
var swanson = async function() {
  var quote = await getSwanson();
  return quote;
}

var getJeopardy = function (){
  return new Promise(function(resolve, reject){
    request('http://jservice.io/api/random', function (err, res, body){
      resolve(body); 
    });
  });
}

var jeopardy = async function(){
  var question = await getJeopardy();
  return(question);
}


// encryption



var makeHash = function(password){
  var hash;
  return new Promise(function(resolve, reject){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
          resolve(hash);
      });
    });
  })
}



module.exports = {
  es6Test, 
  swanson,
  jeopardy,
  makeHash
}
