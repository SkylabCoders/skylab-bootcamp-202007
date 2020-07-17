
// El this por definición apunta a un objeto. En contexto como el global es en la terminal nos devuelve
//un objeeto. En el navegador nos devuelve window porque es el objeto global
console.log(this);



const person = {
    firstName : 'Alex',
    lastName : 'Cao',
    fullName : function() {
        return this.firstName + this.lastName;
    },
}

console.log(person.fullName());



//this apunta a una propiedad de un objeto vacío si invocamos a la propiedad que no existe pero la instancia, entonces la crea!!!!
//Por lo tanto estamos hablando de funciones constructoras
function Person (first, last){

    this.firstName = first;
    this.lastName = last;
    this.fullName = function(){
        return this.firstName + " " + this.lastName; 
    };
}

const vic = new Person('Victor','Alemany');

console.log(vic);



//Recreation of array common functions (alias prototype polution)
function Bowl() {

}

Bowl.prototype.length = 2;
Bowl.prototype.forEach = function(){
    for (let i = 0; i < this.length; i++) {
       console.log(this[i]);
        
    }
};

const myBowl = new Bowl ();
myBowl [0] = 'Pizza';
myBowl.length++;
myBowl [1] = 'Piña';
myBowl.length++;

console.log(myBowl.forEach());


//class definition
class Plate{
    length = 0;
}


// Function definition
function Bowl(){
    const  lengh = 0;
}