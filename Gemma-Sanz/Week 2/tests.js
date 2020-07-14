let president = {
    name: "Pooh",
    next: null
};

/**/
let president = {name: "Pohh", next: undefined};
president.next = president;

// o también funcionaria...
let president = {name: "Pohh"};
president.next = president;
/*
let hace un scope de referencia, aún no se ha terminado de declarar
con var no hay el reference error, no deberia passar un ReferenceError, se inicializa bien con el codigo, la primera vez sube la
declaración del codifo, pero no la inicialización:
    var president = {name:  "Putin", next: president};
var debuelve undefined. Debido al concepto de "hoisting"
    console.log(president): // ()
    console.log(president.next); // undefined
    console.log(president.next.next);// TypeError
*/
/*OTHER EX*/
let station = {
    Owner:{name:"Fred"}
};
let name = station.owner.name;
console.log(name===station.Owner.name);
//Da un error porque en staion.owner es undefined y no puede aparecer nada despues del punto JS deja de ejecutarse.
/*OTHER EX*/
let music = {
    taste: "classical";
    };
let onion = music;
console.log(music.taste); // "classical"
conion.taste = "unami";
console.log(music.taste); //"unami"