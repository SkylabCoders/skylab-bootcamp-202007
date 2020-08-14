/* 
EJEMPLO DE USO DE DESTRUCTURING

const [first, ...rest] = [10, 20, 30, 40];

const data = {
	temp: 001,
	temp2: 002,
	firstName: 'John',
	lastName: 'Bombasto'
};

const { temp, temp2, ...restOfProps } = data;

console.log(restOfProps);
 */

/* 
EJEMPLO DE USO DE CLASES

class Person {
	constructor(name) {
		this.name = name;
	}

	greeting() {
		console.log(`Hello ${this.name}`);
	}
}

class Hero extends Person {
	constructor(name, skill) {
		super(name);
		this.skill = skill;
	}

	power() {
		console.log(`My superpowers is ${this.skill}`);
	}
}

const person = new Person('Bombasto');
const hero = new Hero('Bombasto-hero', 'fliying');

hero.greeting();
hero.power();
 */

/*Llamada ocn módulo de node y gestión con fetch o ASYNC elige una de las dos*/

const https = require('https');
function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = '';
			response.on('data', (chunk) => (data = data + chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => reject(error));
		});
	});
}

/* fetch('https://www.javascript.com').then((data) => {
	console.log(data);
}); */

(async function read() {
	const data = await fetch('https://www.javascript.com');
	console.log(data.length);
})();
