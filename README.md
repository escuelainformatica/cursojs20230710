# Curso de JavaScript, notas de la clase.

* Podemos crear un proyecto, que maneje la interface visual y haga el "back end" con JavaScript.
* Usualmente se trabaja en JavaScript en la parte visual.
* Es decir, nosotros no nos conectamos a la base de datos con JavaScript.

## funciones:

funciones con nombre:
```javascript
function sumar(n1,n2) {}
```
funcciones anonimas:
```javascript
function(n1,n2) {}
```
funcciones flecha (lambda)
> No usar como metodos ya que no se puede usar "this"

```javascript
(n1,n2)=> ...
```
funcciones como metodo:
```javascript
let obj={
    campo1:22,
    metodo1:() {}
}
```


## variables.

## ciclos.

```javascript
for(i=0;i<3;i++) { // i++ = i=i+1
    console.log(i);
}
let productos=["cocacola","fanta","sprite"];
for(i=0;i<productos.length;i++) {
    console.log(productos[i]);
}
```
Con funcion forEach usando una funcion con nombre:
```javascript
let productos=["cocacola","fanta","sprite"];
productos.forEach(mostrar);
function mostrar(producto) {
    console.log(producto);
}
```
Con funcion forEach usando una funcion anonima:
```javascript
let productos=["cocacola","fanta","sprite"];
productos.forEach(function(producto) { console.log(producto)});
```
Con funcion forEach usando una operacion lambda (=>):
```javascript
let productos=["cocacola","fanta","sprite"];
productos.forEach(producto => console.log(producto));
```
## condiciones.

## bloques de codigo y alcance
Se recomienda siempre usar LET.

```javascript
let variable1=1; // desde esta linea en adelante se puede usar la variable variable1
var variable2=1; // esta variable existe en todo el codigo, pero no va a estar definida hasta que se llame a esta linea
```

Las variables definidas fuera de cualquier funcion son globales, es decir, funcionan dentro y fuera de cualquier funcion.

```javascript
let variable="hola";
var variable2="mundo";
function ejemplo() {
    console.log("dentro de la funcion:")
    console.log(variable); // hola
    console.log(variable2); // mundo
}
```
Las variables definidas dentro de una funcion, son solo validas dentro de ella.

```javascript
function ejemplo() {
    let variable3="hola"; // y tambien con var.
}
ejemplo();
console.log(variable3); // ERROR, variable no definida.
```
