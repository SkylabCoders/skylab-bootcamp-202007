/*// const [first, , ...restOfItems] = [10, 20, 30, 40]; //Array destructuring. Rest operator

// console.log(first);
// console.log(restOfItems);

const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'John',
	lastName: 'Bombasto'
};
const { temp1, temp2, ...myhero } = data;

// console.log(temp1);
// console.log(temp2);
// console.log(myHero);

const [first, ...restOfItems] = [10, 20, 30, 40];
const newArray = [...restOfItems];

console.log(newArray);

const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'John',
	lastName: 'Bombasto'
};
const { temp1, temp2, ...myhero } = data;

// const newHero = { myhero };
const newHero = { ...myhero };
console.log(newHero);


class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(`Que pasó ${this.name}!`);
	}
}

class Hero extends Person {
	constructor(name, skill) {
		super(name);
		this.skill = skill;
	}
	greet() {
		console.log(`Hello ${this.name}! `);
	}
}

const elBomba = new Person('Bombasto');
const bombasto = new Hero('Bombasto - el heroe', 'skylaber');
const celeritas = new Hero('Celeritas', 'coder');
celeritas.greet = () => console.log('Hello World');
elBomba.greet();
bombasto.greet();
celeritas.greet();
*/
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

fetch('https://www.javascript.com').then((data) => {
	console.log(data.length);
});

//función de ejecución inmediata. Una función que se declara y se invoca por si sola e inmediatamente. ()()
(async function read() {
	const data = await fetch('https://www.javascript.com');
	console.log(data.length);
})();
