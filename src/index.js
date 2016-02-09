console.log("Hello World");
require("babel-polyfill");
var request = require('request');

const es6Test = () => "yes";

console.log(es6Test()); 

function getQuote() {
  var quote;
 
  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      quote = body;
 
      resolve(quote);
    });
  });
}
 
var swanson = async function() {
  var quote;
  var quotes = [];
  for (var i = 0; i < 3; i++){
    quote = await getQuote();
    quotes.push(quote);
  }
  console.log(quotes);
  return quotes;
}
 

module.exports = {
  es6Test: es6Test,
  swanson: swanson
}
