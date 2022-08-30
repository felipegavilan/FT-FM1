'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 1) return [];
  let left = [];
  let right = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot) left.push(array[i]);
    else{
      right.push(array[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;

    let mitad = Math.floor(array.length / 2);
    let left = array.slice(0, mitad);
    let right = array.slice(mitad, array.length);

    left = mergeSort(left);
    right = mergeSort(right);

    let merge = function(left, right) {
      let datos = [];

      while(left.length > 0 && right.length > 0){
        datos.push(left[0] <= right[0]? left.shift() : right.shift());
      }
      return datos.concat(left).concat(right);
    }
    return merge(left, right);
}
let arr = [9, 5, 2, 6, 10];
console.log(arr);
console.log();
console.log(mergeSort(arr));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
