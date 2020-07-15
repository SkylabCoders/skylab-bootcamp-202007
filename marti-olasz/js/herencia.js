let human = {teeth:32};
let gwen = {
    age:19,

    //Herencia d'un altre objecte
    __proto__: human
}

console.log(gwen.teeth); //32

///////////////////////////////////////////

const sherlock = {name:'sherlock'};
const watson = {name:'watson'};
const obj = {};
obj.__proto__.age = 19;

console.log(sherlock.age);

///////////////////////////////////////////

// Utilitzant classes //
class Spiderman{
    lookOut(){
        alert('hi');
    }
}

let miles = new Spiderman();
miles.lookOut();

// Utilitzant prototype //
let SpidermanPrototype = {
    lookOut(){
        alert('hi');
    }
};

let miles = {__proto__: SpidermanPrototype };
miles.lookOut();
