"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList(){
  this.head = null;
}
function Node(data){
  this.value = data;
  this.next = null;
}
LinkedList.prototype.add = function(data){
let nodo = new Node(data);
let current = this.head;
if(!current){
  this.head = nodo;
  return nodo;
}
while (current.next){
  current = current.next;
}
current.next = nodo;
return nodo;
};
LinkedList.prototype.remove = function(){
  
  if(!this.head) return null;
  if(this.head && !this.head.next){
    let aux = this.head;
    this.head = null;
    return aux.value;
  }
  let current = this.head;
  while(current.next.next){
    current = current.next;
  }
    let aux = current.next;
    current.next = null;
    return aux.value;
   
};
LinkedList.prototype.search = function(data){
  if(!this.head) return null;
  
  let current = this.head;
  while (current){
    if(current.value === data) return current.value;
    else if(typeof data === 'function'){
      if(data(current.value)) return current.value;
    } 
    current = current.next;
  }
  return null;
};
//--------------------------------------------------------------------------------------------
// class LinkedList {
//   constructor(){
//   this.head = null;
// }
// add(data){
//   let node = new Node(data);
//   let current = this.head;
// // si esta vacio
//   if (!current){
//     this.head = node;
//     return node;
//   }
//   //si hay nodos que
//   // recorremos los nodos  
//   while (current.next){
//     //si next tiene elemento,
//     // se reasigna current y pasa al siguiente nodo
//     current = current.next;
//   }
//   current.next = node;
//   return node;
// }
// remove(){
//   //verificamos si la lista no tiene elementos
//   if (!this.head) return null;
//   // verificamos si tiene 1 solo elemento
//   if(this.head && !this.head.next){
//     let aux = this.head;
//     this.head = null;
//     return aux.value;
//   }
//   // si la lista tiene muchos elementos
//   let current = this.head;
//   while (current.next.next){
//     current = current.next;
//   }
//   let aux = current.next;
//   current.next = null;
//   return aux.value;
// }
// search(value){
//   // verificamos si la lista no tiene elementos
//   if(!this.head) return null;
//   // si tiene elementos almancenamos el valor del head dentro de una variable para el variable
//   // hacer el recorrido de la busqueda y corroborar el typeof del elemento.
//   let current = this.head;
//   while (current){
//     // si el typeof del argumento es igual al valor del elemento de la lista de
//     //retornamos el nodo
//     if(current.value === value) return current.value;
//     // si el typeof del argumento es igual a una funcion
//     //buscamos el resultado de la funcion que sea igual al elemento dentro de la lista
//     else if(typeof value === 'function'){
//       if(value(current.value)) return current.value;
//     }
//     current = current.next;
//   }
//   return null;
// }

// }

// class Node{
//   constructor(data){
//   this.value = data;
//   this.next = null;
// }
// }
//---------------------------------------------------------------------------------------------------------


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(){
    this.buckets = [];
    this.numBuckets = 35;
  }
  hash(data){
    let suma = 0;
    for(let i=0; i < data.length; i++){
      suma += data.charCodeAt(i);
    } return suma % this.numBuckets
  };
  set(key, value){
    if(typeof key !== 'string') throw TypeError('Se espera un String');
    let posArr = this.hash(key);
    if(this.buckets[posArr] === undefined){
      this.buckets[posArr] = {};
    }
    this.buckets[posArr][key] = value;
  };
  get(key){
   let posArr = this.hash(key);
   return this.buckets[posArr][key];
  };
  hasKey(key){
    let posArr = this.hash(key);
    return this.buckets[posArr].hasOwnProperty(key);
  };
//---------------------------------------------------------------------------
// function HashTable() {
// //   //arreglo de objetos
// //   this.numBuckets = 35;
// //   this.buckets = [];
// }
// // HashTable.prototype.hash = function (key){
// //   let sum = 0;
// //   for (let i = 0; i < key.length; i++){
// //     sum += key.charCodeAt(i);
// //   }
// //   return sum % this.numBuckets;
// // };
// // HashTable.prototype.set = function (key, value){
// //   // revisa que si sea un string
// //   if(typeof key !== 'string') throw new TypeError('Keys must be strings');
// //   let posArr = this.hash(key);
// //   //si la posicion en el arreglo esta vacio, crea un obj.
// //   if(this.buckets[posArr] === undefined){
// //     this.buckets[posArr] ={};
// //   }
// //   this.buckets[posArr][key] = value;
// // };
// // HashTable.prototype.get = function (key){
// //   let posArr = this.hash(key);
// //   return this.buckets[posArr][key];
// // };
// // HashTable.prototype.hasKey = function (key){
// //   let posArr = this.hash(key);
// //   return this.buckets[posArr].hasOwnProperty(key);
// // };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
