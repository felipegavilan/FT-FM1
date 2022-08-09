
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

   //Las variables declaradas con 'var' se limitan al contexto de ejecución donde son declaradas, 
   // en cambio cuando directamente se asigna un valor sin el 'var' siempre son de contexto global. 

```javascript
x = 1; // 6
var a = 5; 
var b = 10; // 5
var c = function(a, b, c) {
  var x = 10; //1
  console.log(x);
  console.log(a); // 2
  var f = function(a, b, c) {
    b = a; // 3 --> 4
    console.log(b);
    b = c; //consultar por que se ejecuta con resultado 9 en cuarta posición.
    var x = 5;
  }
  f(a,b,c);
  console.log(b); 
}
c(8,9,10);
console.log(b); 
console.log(x);
```

```javascript
console.log(bar); // 2
console.log(baz); // 3
foo(); // 1
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Tony 1
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony 1
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco 2
   }
})();
console.log(instructor); // Tony //
```

```javascript
var instructor = "Tony"; // 3 'consultar porque ejecuta primero el el bloque de codigo del if' 
let pm = "Franco"; // 4
// block if
if (true) {
    var instructor = "The Flash";  // 1
    let pm = "Reverse Flash"; // 2
    console.log(instructor); // 1
    console.log(pm); //2
}
console.log(instructor); // 3 ejecuta instructor con valor The Flash
console.log(pm); // 4 Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //  2
"2" * "3" // NaN
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // NaN
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
 // el output de salida es el console.log(foo()) porque ya está declarado la función foo y tiene asignado el valor de 2.
```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; // retorna 'Frisckies' porque la variable está asignada dentro del contexto de ejecucion de la funcion.
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
// el output de salida es 'Aurelio De Rosa'.
var test = obj.prop.getFullname;

console.log(test());
//undefined porque no está asignado en el contexto global.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
// 1, 4, 3, 2. Por el tiempo desginado en el 3. 
```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
