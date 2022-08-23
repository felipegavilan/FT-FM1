"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value){
  this.value= value;
	this.left = null;
	this.right = null;
 
  }
  size(){
   if(this.value === null) return 0;
   if(this.left === null && this.right === null) return 1;
   if(this.left !== null && this.right === null) return 1 + this.left.size();
   if(this.right !== null && this.left === null) return 1 + this.right.size();
   return 1 + this.left.size() + this.right.size();
  };
  insert(value){
    if(this.value === null){
      this.value = value;
    }
    if(value < this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(value);
      } else{ 
        this.left.insert(value);
        }
      }
    if(value > this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(value);
      } else{ 
        this.right.insert(value);
      }
    }
  };
  contains(value){
    if (this.value === value) return true;
    //mayores a la derecha
    if(value > this.value){
      if(this.right === null) return false;
      return this.right.contains(value);
    }
    //menores a la izquierda
    if(value < this.value){
      if(this.left === null) return false;
      return this.left.contains(value);
    }
    } ;
  depthFirstForEach(cb, order){
    // order = 'post-order'
  if(order === 'post-order'){
    // izq -> der -> root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value)
  }
    //order  =  'pre-order'
  else if(order === 'pre-order'){
    // root -> izq -> der
    cb(this.value)
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
    //'in-order' o cualquiera...
  else{
    //izq -> root -> der
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value)
    if(this.right !== null) this.right.depthFirstForEach(cb, order)
  }
  };
  breadthFirstForEach(cb, queue = []){
    //guardar lo que hay a la izquierda
    if(this.left !== null) queue.push(this.left);
    //guardar lo que hay en la derecha
    if(this.right !== null) queue.push(this.right);
    //ejecutar root
    cb(this.value);
    //revisar si hay elementos en la cola
    if(queue.length > 0){
      queue.shift().breadthFirstForEach(cb, queue);
    }
  };
}
// BinarySearchTree.prototype.size = function() {};
// BinarySearchTree.prototype.insert = function(value) {};
// BinarySearchTree.prototype.contains = function() {};
// BinarySearchTree.prototype.depthFirstForEach = function() {};
// BinarySearchTree.prototype.breadthFirstForEach = function() {};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
