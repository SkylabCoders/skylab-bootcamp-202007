/* const { language, city, bootcamp } = require('./index');

console.log(language);
console.log(city);
console.log(bootcamp); 

const [, value] = require('./index');

console.log(value);
*/
// o en lugar de array destructuring assignment tmb podriamos hacer lo siguiente
/* const secondIndex = require('./index');
console.log(secondIndex[1]);

const text = require('./index');
console.log(text);
 */

//Asi importamos un objeto que tiene 2 propiedades, name y promos
const { bootcamp } = require('./index');

// asi importamos todo bootcamp que es un objecto que tiene una propiedad bootcamp que apunta a un objecto que tiene 2 propiedades
//const bootcamp = require('./index');
console.log(bootcamp);
