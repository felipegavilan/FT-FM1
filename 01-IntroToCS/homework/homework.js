'use strict'

function BinarioADecimal(num) {
  
return Number.parseInt(num,2);

}

function DecimalABinario(num) {
  // tu codigo aca

  var res='';
  while(num > 0){
    res = num % 2 + res;
    num = Math.floor(num/2);
  }
  return res;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}