const person = {
    firstName: 'Alex',
    lastName: 'Cao',
    fullName: function() {
    return this.firstName + ' ' + this.lastName;
        }
    }
    console.log(person.fullName());

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

const fer = new Person('Fer', 'Nandez');
console.log(fer);




function Bowl() {
    this.items = [1,2,3,4,5,6];
    this.map = function(callback) {
        let newArray = [];
        for (let i = 0; i < this.items.length; i++) {
            newArray[newArray.length] = callback(this.items[i]);
        }
        return newArray;
    };
    this.filter = function(callback) {
        let newArray = [];
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                newArray[newArray.length] = this.items[i];
            }
        }
        return newArray;
    }
    this.find = function(callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                return this.items[i];
            }
        }
        return undefined;
    }
    this.findIndex = function(callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                return i;
            }
        }
        return -1;
    }
    this.fill = function(value, startIndex, finalIndex) {
        if (!startIndex) {
            startIndex = 0;
        }
        if (!finalIndex) {
            finalIndex = this.items.length;
        }
        for (let i = startIndex; i < finalIndex; i++) {
            this.items[i] = value;
        }
        return this.items;
    }
}

const myBowl = new Bowl();

console.log(myBowl.map((e) => e + '0'));
console.log(myBowl.filter((e) => e < 3));
console.log(myBowl.find((e) => e < 3));
console.log(myBowl.findIndex((e) => e < 3));
console.log(myBowl.fill(1, 2, 4));








