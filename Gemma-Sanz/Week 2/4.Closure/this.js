/*
const person = {
    firstName: "Alex",
    lastName: "Cao",
    fullName: function () {
        console.log("=====>", this);
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName());
*/

function Person(first, last){
    this.firstName = first; // este this se refiere al objeto de fuera, (Person)
    this.lastName = last;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const fer = new Person("Fer", "Nandez");
console.log(fer);

const alex = new Person("Alex", "Cao");
console.log(alex);
//
function Person(){
    this.firstName = "Alex";
}
Person.prototype.legs = 2; // estas haciendo pollution proto

const fer = new Person();

Person.prototype.eyess = 2; // en el momento que ejecuta esta linea modifica el prototipo
console.log(fer);
console.log(fer.__proto__);
console.log(fer.__proto__.__proto__);

// Other
function Person() {
    this.eyes = 2; // todas las personas tienen ojos
}

const alex = new Person // constante que apunta a una persona
console.log(alex); // Aqui no esta contaminado

Person.prototype.legs = 2; // contamina prototype

const fer = new Person () // aqui person proto ya esta contaminado, por lo que fer tendra piernas

//Recreation of array common functions
function Bowl(){}
Bowl.prototype.length; //crea propiedad length a todos los bowls

const myBowl = new Bowl();
const yourBowl = new Bowl ();

console.log(myBowl.length);
console.log(yourBowl.length);

// EXERCISE FOR EACH PROTOTYPE POLLUTION
function ForEach (){}

ForEach.prototype.length = 0;
for (let i = 0; i < array.length; i++) {
;
    
}

const MyforEach = new ForEach;
forEach([1, 2, 3], function (x) {console.log(x)})

// EXERCISE FOR EACH PROTOTYPE POLLUTION
function Bowl(){
    const length=0;
}
//Class efinition
class Plate{
    length =0;
}
//
