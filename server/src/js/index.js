console.log("Hello World");
require("babel-polyfill");
var request = require('request');

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
  console.log(quote);
  return quote;
}

var getJeopardy = function (){
  return new Promise(function(resolve, reject){
    request('http://jservice.io/api/random', function (err, res, body){
      JSON.parse(body);
      resolve(body); 
    });
  });
}

var jeopardy = async function(){
  var question = await getJeopardy();
  console.log(question)
  return(question);
}


// test


module.exports = {
  es6Test, 
  swanson,
  jeopardy
}
