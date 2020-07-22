//EN CONSOLA DE NAVEGADORES, que el scope global es un obj windows
const test = {
    prop: 42,
    func: function() {
        this.prop = 5;
        return this.prop;
    },
    arrowFn: () => this
  };
  
console.log(test.func());    // expected output: 42
    //NEXT EXERCISE
console.log(this === window);
//output: true
function f1() {return this;}
f1() === window // true;
/*
    aqui si hicieramos
    function f1() {return this;}
    this.f1() === window // true

    <---- PERO SI HICIERAMOS ----->
    function f1() {return 15;}
    this.f1() === window // false

    ==================
    En contexto global this apunta al objeto global, tanto com modo estricto como con no
*/
// Cler window
function f2() {
    'use strict'; // see strict mode
    return this;
  }
  f2() === undefined; // true

// Si ponemos use strict dentro de la función this no hace una referencia en el objeto global, sino que es undefined

const bowl = {
    items: [],
    fn: function(){
        return bowl.items;
    },
};
console.log(bowl.items === bowl.fn()); // true. La fn devuelbe this.items
console.log(bowl.items === []); // false

/*
This en el contexto de una fn es el objeto, y si no esta dentro del obj responde
 al scpoe que esta la fn
 */
// -------Example-------
var obj = {a: "Custom"} // es un obj que tiene una prop que apunta a un string
var a = "Global";
console.log(obj.a === a); // false. Son 2 valores diferentes
function whatsThis(){return this.a;} 
whatsThis(); // returna this.a, aqui hace referencia a window.a, this hace referencia al obj global. Aqui quermos el valor de la fn
whatsThis.call(obj); // podemos llamar a la fn desdel contexto que define la fn 
//es como si llamaramos a whatsThis desde dentro del obj. This es obj.a.
//call cambia el this.

const myOriginalContext = {
    number:4,
    fnDouble: function double(){
        return this.number*2;
    }
}
console.log(myOriginalContext.fnDouble());

const myContextObject = {number: 6}; // 8 This apunta a window aqui
myOriginalContext.fnDouble.call(myContextObject); // 12 This aqui 
//Call es una función que reemplaza el valor de this que le damos
/*
//let o={name: "roberto", saluda: función saludar: return this.name;}
//let s={}
//s.saluda.call(name:"oops")
*/

//CALL REEMBLAZA O SOBRESCRIBE EL VALOR DE THIS
//-----APPLY----- ASSUME UN NUEVO CONTEXTO PARA EL THIS(hasta ahi hacen lo mismo)
myOriginalContext.fnDouble.apply(myContextObject);
//
function add (c, d){
    return this.a + this.b + c + d;
}

var o = {
    a:1,
    b:3
}
add.call(o, 5, 7); // add recibe o que tiene a que es 1, b 3,... a + 3 + 5 + 7= 16
/*
si la funcion add no ttuviera this.a ni this.b, y lo otro fuera igual el resultado seria 12
si o tiene una c:100, el resultado seria 16 igual, porque c no tiene this.c
o no tiene c ni d. A call le pasamos la o, que sera el nuevo this. Pero además la función add tiene c i d, que seran 5 y 6.
si la función add tuviera this.c, y o tuviera c:100. Entonces seria igual a 112. Perque agafem la c del context que tenim el this,
en aquest cas el context de this es o.
La función call es un metodo de este tipo de valor fn, no de la expresión de la fn.
la funcion call como argumento recibe este nuevo contexto; recibe el nuevo this i los argumentos.
*/
add.apply(o, [5, 7]);
/*
el apply es muy similar al call, pero apply necesita un array con los argumentos que va a necesitar como la función
*/

/* Example done with apply
function testApply (str3, str4){
    return this.str1 + this.str2 + str3 + str4;
};

let string = {
    str1: "a",
    str2: "pp",
    str4: "e"
}
testApply.apply(string,["l", "y"]);// return "hello"
*/
/*
Si a apply solo le pasamos 1 argumento que sea un numero por ejemplo devolverá "[Object number]"
*/
function bar(){
    console.log(Object.prototype.toString.call(this));
}
bar.call(7)//[object Number]
bar.call(undefined)//[object Window] (en concols google)
bar.call("")// [object String]

//-------BIND method
//CREA una nueva fn que recibe como 1r arg un obj que va a ser su contexto
//Somo lo podremos hacer 1 vez y permnentemente estará vinculado a este Scope
function f(){
    return this.a;
}
const newContext = {a: "pepe"};
var g = f.bind(newContext);
console.log(g()); // "pepe"
var h = g.bind({a:"lola"}) // Aqui intentamos vincular f con un nuevo contexto, pero nos devuelve el contexto de antes
console.log(h()); // "pepe"
var o = {a: 37, f: f, g: g, h: h}
console.log(o.a, o.f(), o.g(), o.h());
/*
o.a es una propiedad que apunta a 37. o.f apunta a la fn f, o.g apunta a una nueva fn apunta a un contexto
que no se puede canviar, apunta a "pepe". o.h apunta a una var que ya habia estado vinculado con otra var con lo 
qual nos devueñve el contexto original y pasa del que intenamos vincular
Dentro de var o, a es una propiedad que apunta al valor 37, f una propiedad que apunta a la función f, g una propiedad
que apunta a la variable g que es una funcion... y h una variable que apunta a una función,....
Example:
function myFunction(){
    return this.a;
};
var g = {a:"I'm a. ", b:37};
var h = {a: "I'm second a. ", d:1};
var j = myFunction.bind(h);
console.log(j()) // I'm second a.
*/
var globalObject = this;
var foo = () => { return this;} // return globalObject
var fn = function () { return this;} //returns globalObject
foo() === fn() //true
//Pero si las fn estan dentro de un objeto.... ---------------------------
var obj = {
    fn: function() {return this;},
    arrow: () => {return this;},
    innerArrow: () => {
        return () => {return this;}
    }
}
//this dentro de un objeto se va al scope pader, pero las arrow function no se queda aquí sino que se va al global
console.log("fn",obj.fn()); // el this se va al obj que la contiene(obj)
console.log("arrow", obj.arrow()); // aqui el this se va a la scope global, va arriba de todo, imprime el obj de window.
//This dentro de una arrow function retiene el contexto léxico, el scope global, el contexto global
console.log("inner arrow", obj.innerArrow()());//innerArrow ejecuta una fn y devuelve una fn, por eso ponemos 2 () (), para ejecutarlas, pero como son arrow,
//sube hasta arriba deltodo y devuelve el objeto de window.
/*
EL THIS BUSCA EN QUE CONTEXTO SE ESTA EJECUTANDO ESTA FUNCIÓN, SI ESTA EN EL SCOPE GLOBAL DEVULVE WINDOW,
SINO DEVUELVE EL OBJETO CONTEXTO AL CUAL ESTÁ. La diferencia esta en el valor que estamos retornando. Las arrow function se saltan esto.
*/

/*
This dentro de una fn de un obj es el obj a través del cual se llama a esta fn.
*/