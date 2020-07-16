// 'use strict'

// console.log(this);

// const person = {
//     firstName: 'Alex',
//     lastName: 'Cao',
//     fullName: function() {
//         console.log(this);
//         return this.firstName + " " + this.lastName;
//     },
// };

// console.log(person.fullName());

function Person(first, last) { //constructora
    this.firstName = first;
    this.lastName = last;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

const fer = new Person('Fer', 'Nandez')
console.log(fer)


