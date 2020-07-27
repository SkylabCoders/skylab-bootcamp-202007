'use strict'

function Bowl() {

    this.items = ['setas', 'arroz', 'salmon', 'cebolla', 'lechuga', 'tomate'];

    this.map = function (func) {
        let newArray = [];
        for (let i = 0; i < this.items.length; i++) {
            newArray[i] = func(this.items[i]);
        }
        return newArray;
    };

    this.filter = function (func) {
        let newArray = [];
        let count = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (func(this.items[i])) {
                newArray[count] = this.items[i];
                count++;
            }
        }
        return newArray;
    };

    this.find = function (func) {
        let result = null;
        for (let i = 0; i < this.items.length; i++) {
            if (func(this.items[i])) {
                result = this.items[i];
            } else {
                result = undefined;
            }
        }
        return result;
    };


    this.findIndex = function (func) {
        let result = null;
        for (let i = 0; i < this.items.length; i++) {
            if (func(this.items[i])) {
                result = i;
            } else {
                result = -1;
            }
        }
        return result;
    };


    this.some = function () {
        let result = null;
        for (let i = 0; i < this.items.length; i++) {
            if (func(this.items[i])) {
                result = true;
            }
        }
        result = false;
        return result;
    };

    this.every = function () {
        let result = null;
        let newArray = [];
        for (let i = 0; i < this.items.length; i++) {
            if (func(this.items[i])) {
                newArray.push(this.items[i]);
            }
        }
        if (newArray.length === this.items.length) {
            result = true;
        } else {
            result = false;
        }
        return result;
    };

    this.fill = function (value, start, finish) {
        if (start === undefined) {
            start = 0;
            finish = this.items.length;
        } 
        if (finish === undefined) {
            finish = this.items.length;
        }

        for (let i = start; i < finish; i++) {
            this.items[i] = value;
        }
        return this.items;    
    }

    this.copyWithin = function (target, start, end) {
        if (start === undefined) {
            start = 0;
            end = this.items.length;
        }
        if (end === undefined) {
            end = this.items.length;
        }
        let tempArray = [];
        for (let i = start; i < end; i++) {
            tempArray.push(this.items[i]);
        }
        let count = 0;
        for (let i = target; i < tempArray.length; i++) {
            this.items[i] = tempArray[count];
            count++;
        }
        return this.items;
    }
            
          
}










const myBowl = new Bowl();

function test(element) {
    return element.length > 3;
};
// console.log(myBowl);

console.log(myBowl.copyWithin(0, 2, 4));