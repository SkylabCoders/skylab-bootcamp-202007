//methods done in a constructor function
// we will use "this"

'use strict'

function Bowl() {
    this.items = [];
    this.map = function(callbackMap) {
        const newArray = [];
        for (let index = 0; index < this.items.length; index++) {
            newArray[index] = callbackMap(this.items[index]);
        }
        return newArray;
    };
    this.filter = function(callbackFilter) {
        const newArray = [];
        let j = 0;

        for (let i = 0; i < this.items.length; i++) {
            if(callbackFilter(this.items[i])) {
                newArray[j] = this.items[i];
                j++;    
            }
        }
        return newArray;
    };
    this.find = function(callbackFind) {
        for (let index = 0; index < this.items.length; index++) {
            if(callbackFind(this.items[index])) {
                console.log(this.items[index])
                return this.items[index];
            }  
        }
        return undefined;
    }
}    


const myBowl = new Bowl();
myBowl.items = [4, 2, 7, -1]

console.log(myBowl.map(function(number) { return number * 5; }))
console.log(myBowl.map(function(number) { return number + 2; }))



//se puede hacer un push para añadir elementos al array, pero creando ese metodo