let president = {
    name: "Pooh",
    next: null
};

/**/
let president = {name: "Pohh", next: undefined};
president.next = president;
/*
let hace un scope de referencia, aún no se ha terminado de declarar
con var no hay el reference error, no deberia passar un ReferenceError, se inicializa bien con el codigo, la primera vez sube la
declaración del codifo, pero no la inicialización:
    var president = {name:  "Putin", next: president};
var debuelve undefined. Debido al concepto de "hoisting"
*/
/**/
