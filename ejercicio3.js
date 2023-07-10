let paises=["chile","argentina","peru"];
console.log(paises); // (3) ['chile', 'argentina', 'peru']
// ciclo
for(i=0;i<3;i=i+1) { // un ciclo que parte del 0, tiene que ser menor que 3, y por cada ciclo voy sumando 1
    console.log(i);
    console.log(paises[i]); // paises[0],paises[1],paises[2]
}
for(e=0;e<10;e=e+2) {
    console.log(e); // 0,2,4,6,8
}
for(e=8;e>=0;e=e-2) {
    console.log(e); // 8,6,4,2,0
}

