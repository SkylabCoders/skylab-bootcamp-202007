'use strict';

function Bowl() {
    this.items = [1, 10, 'word', 40, '33', 5];

    this.map = function (callback) {
        const newArray = [];
        for (let i = 0; i < this.items.length; i++) {
            newArray[i] = callback(this.items[i]);
        }
        return newArray;
    };

    // this.forEach = function (callback) {
    //     for (let i = 0; i < this.items.length; i++) {
    //         callback(this.items[i]);
    //     }
    // };

    this.filter = function (callback) {
        const newArray = [];
        let j = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                newArray[j] = this.items[i];
                j++;
            };
        }
        return newArray;
    };

    this.find = function (callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                return this.items[i];
            }
        }
    };

    this.findIndex = function (callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                return i;
            }
        }
    };

    this.fill = function (value, start, end) {
        let firstIndex = null;
        let lastIndex = null;
        if (start === undefined) {
            firstIndex = 0;
        }
        else {
            firstIndex = start;
        }
        if (end === undefined) {
            lastIndex = (this.items.length) - 1;
        }
        else {
            lastIndex = end;
        }
        for (let i = firstIndex; i <= lastIndex; i++) {
            this.items[i] = value;
        }
        return this.items;
    };

    this.some = function (callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                return true;
            }
        }
        return false;
    };


    this.every = function (callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (!callback(this.items[i])) {
                return false;
            }
        }
        return true;
    };

    this.reduce = function (callback) {
        
    }
}

const myBowl = new Bowl();

console.log('map method:',myBowl.map(function (num) {
    return num * 2;
}));

console.log('filter method:',myBowl.filter(function (num) {
    if (typeof (num) === 'string') {
        return num;
    }
}));

console.log('find method:',myBowl.find(function (num) {
    if (typeof (num) === 'string') {
        return num;
    }
}));

console.log('findIndex method:',myBowl.findIndex(function (value) {
    if (value === '33') {
        return true;
    }
}));

console.log('fill method:',myBowl.fill('X', 0, 3));

console.log('some method:',myBowl.some(function (num) {
if (typeof (num) === 'string') {
    return num;
}
}));

console.log('some method:',myBowl.some(function (num) {
    if (num === '33') {
        return num;
}
}));

console.log('every method:',myBowl.every(function (num) {
    if (num === 'X') {
        return num;
    }
}));

console.log ('reduce method:',myBowl.reduce(function (acc, curr) {
    return acc * curr;
}


)

// console.log(myBowl.forEach(function (num) {
//     num= 5;
// return num*5;
// })
// );



    // this.filter = function () { };
    // this.find = function () { };
    // this.findIndex = function () { };
    // this.fill = function () { };
    // this.copywithin = function () { };
    // this.some = function () { };
    // this.every = function () { };
    // this.reduce = function () { };

    /*            if (i >= firstIndex && i <= lastIndex) {
        this.items[i] = value;
    }*/