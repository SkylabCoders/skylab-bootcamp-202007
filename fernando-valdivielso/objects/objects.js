/* Crea la defincion de Skylaber
/ un skylaber tiene:
/ nomber: texto
/ motivacin: [4 motivaciones]
/ direccion: {ciudad:, pais:}
/ profe preferido: texto
*/

// const motivation = ['very high', 'high', 'meh', 'low']

// const teacher = ['Gilbe', 'Jorge', 'Beto'];

// const genericAddress = {
//     city: 'any',
//     country: 'any',
// }

// function Skylaber(name, motivation, address, teacher) {
//     this.name = name,
//     this.motivation = motivation,
//     this.address = address,
//     this['favourite teacher'] = teacher
// }

// const gerard = new Skylaber('Gerard', motivation[0], {city: 'Barcelona', country: 'Spain'}, teacher[0]);

// console.log(gerard);

// const alex = new Skylaber('Alex', motivation[0], {...genericAddress}, teacher[1]);

// console.log(alex);

const Manager = {
    name: 'John',
    age: 27,
    job : 'Software Engineer',
}

const Intern = {
    name: 'Ben',
    age: 32,
    job: 'Software Engineer Intern',
}

function sayHi() {
    console.log('Hello, my name is ' + this.name);
}
//add sayHi function to both objects
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;



sayHi.call(Manager); //same as Manager.sayHi()
// Intern.sayHi();