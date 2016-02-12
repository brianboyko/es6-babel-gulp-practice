require("babel-polyfill");

var codeGenerator = function(){
  let possible = "BCDFGHJKLMNPQRSTVWXZ";
  let badWords = ['NGGR', 'NGRR', 'NNGR', 'CVNT', 'FVCK', 'SHJT', 'TWNK'];
  let code = "";
  do{
    for (let i = 0; i < 4; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } while(badWords.indexOf(code) != -1);
  return code; 
};


module.exports = {
  codeGenerator
};