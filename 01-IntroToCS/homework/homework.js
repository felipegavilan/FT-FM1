"use strict";

function BinarioADecimal(num) {
  let binario = String(num).split("").reverse();
  let decimal = 0;
  for (let i = 0; i < binario.length; i++) {
    decimal += Number(binario[i]) * 2 ** i;
  }
  return decimal;
  //return Number.parseInt(num,2);
}

function DecimalABinario(num) {
  // tu codigo aca

  var res = "";
  while (num > 0) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  return res;
  //return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
