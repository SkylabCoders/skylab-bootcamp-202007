//methods done in a constructor function
// we will use "this"

'use strict'

function Bowl() {
    this.items = [];
    this.map = function(callback) {
        const newArray = [];
        for (let index = 0; index < this.items.length; index++) {
            newArray[index] = callback(this.items[index]);
        }
        return newArray;
    };
    this.filter = function(callback) {
        const newArray = [];
        let j = 0;

        for (let index = 0; index < this.items.length; index++) {
            if(callback(this.items[index])) {
                newArray[j] = this.items[index];
                j++;    
            }
        }
        return newArray;
    };
    this.find = function(callback) {
        for (let index = 0; index < this.items.length; index++) {
            if(callback(this.items[index])) {
                return this.items[index];
            }  
        }
        return undefined;
    };
    this.findIndex = function(callback) {
        for (let index = 0; index < this.items.length; index++) {
            if(callback(this.items[index])) {
                return index;
            }
        }
        return -1;
    }
}    


const myBowl = new Bowl();
myBowl.items = [4, 2, 7, -1]


console.log(myBowl.map(function(number) { return number * 5; }))

console.log(myBowl.filter(function(number) { 
    if(number > 1) {
        return true;
    }
    else{
        return false;
    }
}));

console.log(myBowl.find(function(number) { 
    if(number > 5) {
        return true;
    }
    else{
        return false;
    }
}));

console.log(myBowl.findIndex(function(number) { 
    if(number > 4) {
        return true;
    }
    else{
        return false;
    }
}));




//se puede hacer un push para añadir elementos al array, pero creando ese metodo