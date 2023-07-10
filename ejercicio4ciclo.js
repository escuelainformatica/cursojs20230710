let autos=[
    {
        color:"rojo",
        marca:"toyota",
        modelo:"yaris"
    },
    {
        color:"azul",
        marca:"renault",
        modelo:"r20"
    },
    {
        color:"gris",
        marca:"ford",
        modelo:"f-150"
    }
];
for(i=0;i<autos.length;i++) {
    console.log(autos[i]);
}
autos.forEach(auto=>console.log(auto));