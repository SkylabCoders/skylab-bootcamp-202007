// // // // 'use strict';

// // // // // HEROES: Hero[] = [
// // // // //     { id: 11, name: 'Dr Nice' },
// // // // //     { id: 12, name: 'Narco' },
// // // // //     { id: 13, name: 'Bombasto' },
// // // // //     { id: 14, name: 'Celeritas' },
// // // // //     { id: 15, name: 'Magneta' },
// // // // //     { id: 16, name: 'RubberMan' },
// // // // //     { id: 17, name: 'Dynama' },
// // // // //     { id: 18, name: 'Dr IQ' },
// // // // //     { id: 19, name: 'Magma' },
// // // // //     { id: 20, name: 'Tornado' }
// // // // //   ];

// // // const myCar = {
// // //   make: 'Ford',
// // //   model: 'Mustang',
// // //   year: 1969
// // // };

// // // console.log('dot notation:', myCar.model);
// // // console.log('bracket notation:', myCar['model']);
// // // console.log('undefined property', myCar.colour);

// // // // const myObj = new Object();
// // // // console.log('==>', myObj);
// // // // myObj.myString = 'string defined property';

// // // // const str = 'myString';
// // // // console.log(myObj[str]);

// // // const myObj = {
// // //   myString: 'String defined property',
// // //   'date created': '02 / 20 / 2020',
// // //   '': 'Para Gerard'
// // // };

// // // console.log(myObj['date created']);

// // // function showProps(obj, objName) {
// // //   let result = '';

// // //   for (let prop in obj) {
// // //     if (obj.hasOwnProperty(prop)) {
// // //       result += `${objName}.${prop} = ${obj[prop]}\n`;
// // //     }
// // //   }
// // // }
// // // console.log(showProps(myObj, 'myObj'));

// // // const mystery = 'Padre fundador';

// // // const obj = {
// // //   p1: 10,
// // //   p2: 20,
// // //   f1() {},
// // //   f2: () => {},
// // //   f3: function () {},
// // //   [mystery]: 'David',
// // //   mystery,
// // //   Mystery: 'Otro David'
// // // };

// // // console.log(obj[mystery]);
// // // console.log(obj['Padre fundador']);
// // // console.log(obj['mystery']);
// // // console.log(obj['mystery']);
// // // console.log(obj.Mystery);

// // function Car(make, model, year, availableColors) {
// //   this.make = make;
// //   this.model = model;
// //   this.year = year;
// //   this.availableColors = availableColors;
// // }

// // const colors = ['red', 'blue', 'pink', 'grey', 'black'];
// // const myCar = new Car('Ford', 'Mustang', 1969, colors[0]);
// // console.log(myCar);

// // // const myCar = {
// // //     make: 'Ford',
// // //     model: 'Mustang',
// // //     year: 1969
// // //   };

// // const myOtherCar = {
// //   make: 'VW',
// //   model: 'Polo',
// //   year: 2019
// // };

// // console.log(myOtherCar);

// /* Definition SKYLABER
// name: ' ';
// motivation: ['', '', '', ''];
// address: {city, country}
// // teacher: [''];*/
// -------------------------
// function Skylaber(name, motivation, address, professor) {
//   this.name = name;
//   this.motivation = motivation;
//   this.address = address;
//   this.professor = professor;
// }
// const professor = ['Gilbe', 'Beto', 'Jorge'];
// const motivation = ['100%', '150%', '200%', '1000%'];

// function Address(city, country) {
//   this.city = city;
//   this.country = country;
// }

// function AddressExtended(cp) {
//   //todo lo de address
//   this.cp = cp;
// }

// const vanesaName = 'Vanesa';
// const vanesaAddress = new Address('Bcn', 'Argentina');
// const vanesa = new Skylaber(
//   vanesaName,
//   motivation[3],
//   vanesaAddress,
//   professor[0]
// );

// console.log(vanesa);

// -------------------

const Manager = {
  name: 'John',
  age: 27,
  job: 'Software Engineer'
};

const Intern = {
  displayName: 'Ben',
  age: 21,
  job: 'Software Engineer Intern',
  get name() {
    console.log(this.displayName);
  },
  // getName: function () {
  //   console.log(this.displayName);
  // },
  set name(newName) {
    this.displayName = newName;
  }

  // setName(newName) {
  //   this.displayName = newName;
  // }
};

Intern.name;
Intern.name = 'vanesa';
Intern.name;

delete Intern.displayName; // para eliminar propiedades en el objeto
console.log(Intern);

// function sayHi() {
//   console.log('Hello, my name is', this.name);
// }

// // //add sayHi function to bath objects
// // Manager.sayHi = sayHi;
// // Intern.sayHi = sayHi;

// // Manager.sayHi(); // Hello, my name is John
// // Intern.sayHi(); // Hello, my name is Ben

// sayHi.call(Intern);
// sayHi.call(Manager);
