'use strict'


//prototype

let mammal = {
    brainy: true,
};

let human = {
    __proto__: mammal,
    teeth: 32
};

let gwen = {
    __proto__: human,
};

console.log(gwen.brainy); // true



//shadowing

let human = {
    teeth: 32
};

let gwen = {
    __proto__: human,
    // This object has its own teeth property, no miramos el proto pq ya hay un propiedad aquí
    teeth: 31
};

console.log(gwen.teeth); // 31


//asignación

let human = {
    teeth: 32
};

let gwen = {
    __proto__: human,
};

gwen.teeth = 31; //se lo cambiamos a gwen
gwen.__human__teeth = 4; //se lo cambiamos al prototype


//polluting prototype (contaminando el prototype, por eso está en desuso)

let sherlock = {
    name: 'sherlock'
}

let watson = {
    name: 'watson'
}

let obj = {};

obj.__proto__.smell = 'banana';

console.log(sherlock.smell); // banana
console.log(watson.smell); // banana


//

