// console.log(variable); // ERROR: Cannot access 'variable' before initialization
let variable="hola mundo";
console.log(variable); // OK

console.log(variable2); // undefined
var variable2="hola mundo";
console.log(variable2); // OK

function ejemplo() {
    let variable3="hola";
    console.log("dentro de la funcion:")
    console.log(variable);
    console.log(variable2);
}
ejemplo();
console.log(variable3);