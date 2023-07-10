// 3 formas de definir una funcion
// funcion con nombre:
// function suma(n1,n2) { .... };
// funcion anonima:
// function (n1,n2) { .... };
// (n1,n2)=> .... (como funcion anonima como lambda)
// funcion dentro de un objeto (metodo)

let auto={ // auto es un objeto
    color:"rojo",
    marca:"toyota",
    modelo:"yaris",
    mostrar:function () { // funcion dentro de un objeto se llama metodo.
        console.log("el auto es :"+this.color); // la variable this indica usualmente el objeto actual.
    }
}
auto.mostrar();

let auto2={ // auto es un objeto
    color:"azul",
    marca:"toyota",
    modelo:"yaris",
    mostrar: () => console.log("el auto es :"+this.color), // la variable this indica usualmente el objeto actual.
    mostrar2:function () { 
        console.log("el auto es :"+this.color); 
    }    
}
auto2.mostrar();
auto2.mostrar2();