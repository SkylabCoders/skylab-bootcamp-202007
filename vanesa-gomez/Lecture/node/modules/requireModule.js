// const moduleApi = require('./index');

// console.log(moduleApi.language);
// console.log(moduleApi.city);
// console.log(moduleApi.bootcamp);

//con formato destructuring
const { language, city, bootcamp } = require('./index');

console.log(language);
console.log(city);
console.log(bootcamp);

//Ejemplo1
const list = require('./index');

console.log(list);

// array destructuring assignment
// const [, , value] = require('./index');

// console.log(value)

//Ejemplo 2 y ejemplo 3 de exportar una función
const templateGenerator = require('./index');
console.log(templateGenerator('Skylab Coders Academy', '202007'));

//ejemplo num 4
setInterval(() => console.log('Hello Event Loop'), 500);
