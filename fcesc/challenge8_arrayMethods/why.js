/* Francesc Brugarolas - skylab bootcamp 202007 - test */
'use strict';

// class Spiderman{
//     constructor(name, type){
//         this.name = name,
//         this.type = type
//     } 
//     lookOut() {
//         alert('My Spider-Sense is tingling.');
//     }
//     show(){
//         let arr = Object.keys(this);
//         for(let el of arr){
//             console.log(`property -> ${el}: ${this[el]}`);
//         }
//     }
//     special = 'someValue';
// }

// let agentOne = new Spiderman('Miles', 'Superhero');
// console.log(agentOne.show());

// let a = {name: 'ooops, something went worng'};
// console.log(agentOne.show().bind(a));


"use strict";
var button = document.querySelector('.nav__button');
console.log(button);
var status = false;
button.addEventListener('click', function() {
    debugger;
    if (!status) {
        button.innerHTML = 'Logout';
        status = true;
    } else {
        button.innerHTML = 'Login';
        status = false;
    }
});
