'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {      
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //creamos un array para guardar el factoreo
  let arr = [1];
  // incializamos un for para poder iterar sobre la variable num
  // incrementando el divisor (variable i).
 for(let i = 2; i <=num; i++){
  // dentro del for establecemos un while para 
  // corrobar si se cumple la condicion y realizar la operación
  while(num % i == 0){
    //si se coumple la condición
    //pisamos la variable con el resultado de la operación
    //para continuar con el bucle
    num = num / i;
    //pusheamos el divisor en el arreglo.
    arr.push(i);
  }
 }
 return arr;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  //iteramos sobre el primer elemento
  // for(let i = 0; i < array.length; i++){
  //   //al estar iterando sobre el primer elementos
  //   //tomamos el segundo elemento
  //   for(let j = 0; j < array.length; j++){
  //     //comparamos si el primer elemento es menor al segundo elemento
  //     if(array[i] < array[j]){
  //       //intercambiamos lugares
  //      [array[i], array[j]] = [array[j], array[i]]
  //     }
  //   }
  // }
  // return array;

  let swap = true;
  while(swap){
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]){
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      } 
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];
  	
    while(j >= 0 && array[j] > aux){	
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = aux;
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 0; i < array.length; i++) {              //identificamos el numero mas chico
  let min = i;                                        //asumimos que está en el i
  for (let j = i+1; j < array.length; j++) {          //recorremos el array buscando el numero más chico
    if(array[min] > array[j]) min = j;                //actualizamos el index más chico.
  }
    if( i !== min){
      let temp = array[i];                            //intercambiamos valores entre el número más chico y le "primer" valor.
      array[i] = array[min];
      array[min] = temp;
    }
  }
return array;
}
let array = [5, 1, 4, 2, 8];
 console.log(insertionSort(array))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
