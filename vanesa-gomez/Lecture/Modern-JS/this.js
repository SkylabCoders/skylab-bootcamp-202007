// const person = {
//     firstName: 'Alex',
//     lastName: 'Cao',
//     fullName: function() {
//         console.log(this)
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(person.fullName());



// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.fullName = function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const fer = new Person ('Fer', 'Nandez');
// console.log(fer);

// const alex = new Person('Alex', 'Cao');
// console.log(alex);


// Recreation of array common function. 

// Function definition
function Bowl() {
    this.items = [];
    this.map = function() {}
    this.forEach = function() {}
    this.filter = function() {}
}


//Prototype Pollution
Bowl.prototype.length = 3;

Bowl.prototype.forEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

const myBowl = new Bowl();
myBowl[0] = 'pizza';
myBowl.length++;
myBowl[1] = 'piña';

myBowl.forEach();

