/*const [first, ...restOfFighters] = [10, 20, 30, 40];
const [first, , ...restOfFighters] = [10, 20, 30, 40];
console.log(first);
console.log(restOfFighters);

const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'John',
	lastName: 'Bombasto'
};

//const { firstName, lastName, ...restOfProps } = data;
//console.log(firstName);
//console.log(lastName);
//console.log(restOfProps);

const newArray = [...restOfItems];

const { temp1, temp2, ...myHero } = data;
console.log(temp1);
console.log(temp2);
console.log(myHero);

const newHero = { ...myHero };
console.log(myHero);

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
		console.log(`Hello ${this.name}`);
	}
}

const elBomba = new Person('Bombasto');
const bombasto = new Hero('Bombasto - el heroe', 'Skylaber');
const celeritas = new Hero('Celeritas', 'coder');

celeritas.greet = function () {
	console.log('Hola mundo', this.skill);
};
//celeritas.greet = () => console.log('Hola mundo', this.skill);

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

const url = 'https://www.javascript.com';

fetch(url).then((data) => {
	console.log(data.length);
});

//immediate execute function
(async function read() {
	const data = await fetch(url);
	console.log(data.length);
})();
