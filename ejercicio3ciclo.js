let paises=["chile","argentina","peru","colombia","venezuela","ecuador"];
console.log(paises.length)
// #1
for(numpais=0;numpais<4;numpais=numpais+1) { // numpais=numpais+1 es un incrementador
    console.log(paises[numpais]); // chile,argentina,peru
}
// #2
for(numpais=0;numpais<4;numpais++) { // numpais++ es igual a numpais=numpais+1
    console.log(paises[numpais]); // chile,argentina,peru
}
// #3
console.log("Ejemplo #3:-------------------");
for(numpais=0;numpais<paises.length;numpais++) { 
    console.log(paises[numpais]); // chile,argentina,peru,colombia,venezuela,ecuador
}
// #4
console.log("Ejemplo #4:-------------------");
paises.forEach(ciclo);
function ciclo(value,index,array) {
    console.log(value);
}
// #5
console.log("Ejemplo #5:-------------------");
paises.forEach(function(value,index,array) { // definiendo una funcion anonima es una funcion sin nombre
    console.log(value);
 });
// #6
console.log("Ejemplo #6:-------------------");
paises.forEach((value,index,array)=>console.log(value)); // operacion lambda.
// #7
console.log("Ejemplo #7:-------------------");
// por cada uno de los paises, mostrarlo en el log.
paises.forEach(pais=>console.log(pais)); // operacion lambda.

