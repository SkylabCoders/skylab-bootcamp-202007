"use strict";

function fnUpAndDown() {
    function imprim(value, text) {
        return console.log(`The ${text} is ${value}.`);
    }
    let increment = function (value) {
        value += 1;
        let text = "increment";
        return imprim(value, text);
    };

    function decrement(value) {
        let text = "decrement";
        value -= 1; // !s'ha de igualar el value = value + 1;
        return imprim(value, text); //!! he de cridar a una funció a la que vull;
    }
    return {
        increment,
        decrement,
    }; //!
}
var operation = fnUpAndDown();
/* 
operation.increment(1) aixo a consola per imprimir!!!! operation es una variable que apunta a una funció que 
    que aquesta retorna un objecte.
*/
// CALLBACK

function myPrivateLog(value) {
    return console.log(`The result is ${value}.`);
}
let increment = function (value) {
    value += 1;
    return myPrivateLog(value);
};

function decrement(value) {
    value -= 1; // !s'ha de igualar el value = value + 1;
    return myPrivateLog(value); //!! he de cridar a una funció a la que vull;
}

function fnUpAndDown(value, fr) {
    return fr(value);
}
fnUpAndDown(1, increment);