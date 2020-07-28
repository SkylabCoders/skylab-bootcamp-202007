'use strict';

const sherlock = {smart: true};
const watson = {handsome: true};

const alex = {name: 'Alex'};

alex.__proto__ = { ...sherlock, ...watson};

let sherlock = {
    address: {
        city: 'London'
    }
}

let watson = {
    address: sherlock.address
}

let obj = {};

obj.__proto__.smell = 'banana';

console.log(sherlock.smell);



class Spiderman {
    lookOut() {
        alert('My Spider-Sense is tingling.');
    }
}

let miles = new Spiderman();
miles.lookOut();