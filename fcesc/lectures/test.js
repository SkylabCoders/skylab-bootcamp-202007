/* Francesc Brugarolas - skylab bootcamp 202007 - test */
// 'use strict';

// class Algo {
//     constructor() {
//         this.name = "nada";
//         this.saluda = function saludar() {
//         console.log(this.name);
//         };
//     }
// }
// let o = {
// name: "pepe",
// saluda: function saludar() {
//     console.log(this.name);
// },
// };
// let p = { name: "juan", saluda: o.saluda};
// let q = { name: "marciano", saluda: p, raro: baz, muyraro: wtf};
// let r = new Algo();
// function baz (){console.log (this.name);};
// var name = "global";
// let lost = q.raro;
// function foo (fn){fn()};
// function bar (){baz.call(o)};
// function wtf (){
//     return () => {console.log(this.name); };
// };

// o.saluda();
// p.saluda();
// r.saluda();
// q.saluda.saluda();
// o.saluda.call({name: "zombie"});
// r.saluda.call({name: "oops"});
// q.saluda.saluda.call({name: "tiger"});
// baz(); // only works in non-strict
// q.raro(); // only works in non-strict
// lost(); // same as previous but 'this' is lost
// foo(o.saluda); // binding is lost to global
// foo(q.raro); // binding is lost to global
// foo(q.saluda.saluda);
// bar();
// baz.call({name: "troll"});
// bar.call({name: "zombie"}); // hard binding cannot be overriden
// (q.raro = baz)();
// wtf.call({name: "vampire"})();

// let z = wtf.call({name: "licanthrope"});
// z.call({name: "elf"});
// q.muyraro()();




let o = {name: 'John', rare: () => {return this}, show: function(){ return this.name;}};
let p = {species: 'human', id: o, show: o.show, rare: () => {return this}, superrare: o.rare, name: 'ops-human'};
let q = {type: 'animal', id: p, species: p.show, show: o.show, rare: () => {return this}, superrare: o.rare, name: 'ops-animal'};
function fooz(){
    return () => {return this};
}
function baaz(){
    return fooz();
}
let crazy = () => {return this};
function fuuz(){
    return crazy();
}
function buuz(){
    return fuuz();
}
function feez(){
    let supercrazy = () => {return this};
    return supercrazy;
}
function beez(){
    return feez();
}

console.log(o.show());
console.log(p.show());
console.log(q.show());
console.log(p.id.show());
console.log(q.id.show());
console.log(q.id.id.show());
console.log(o.rare());
console.log(p.rare());
console.log(p.superrare());
console.log(q.rare());
console.log(fooz());
console.log(baaz());
console.log(crazy());
console.log(fuuz());
console.log(buuz());
console.log(feez());
console.log(beez());

