// const [first, , ...restOfItems] = [10, 20, 30, 40];

// const newArray = [...restOfItems];

// const data = {
// 	temp1: '001',
// 	temp2: '002',
// 	firstName: 'John',
// 	lastName: 'Bombasto'
// };

// const { temp1, temp2, ...restOfProps } = data;

// const newHero = { ...restOfProps };
// console.log(newHero);

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	greet() {
// 		console.log(`Que paso, soy ${this.name}!`);
// 	}
// }

// class Hero extends Person {
// 	constructor(name, skill) {
// 		super(name);
// 		this.skill = skill;
// 	}
// 	greet() {
// 		console.log(`${this.name} is in da house my power is ${this.skill}!`);
// 	}
// }
// const elBomba = new Person('El bomba');
// const bombasto = new Hero('Bombasto', 'codigo limpio');
// const celeritas = new Hero('Celeritas', 'soy junior');

// celeritas.greet = function () {
// 	return console.log(`${this.name}`);
// };
// elBomba.greet();
// bombasto.greet();
// celeritas.greet();
const https = require('https');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = '';
			response.on('data', (chunk) => (data += chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => reject(error));
		});
	});
}

fetch('https://www.javascript.com').then((data) => {
	console.log(data.length);
});
(async function read() {
	const data = await fetch('https://www.javascript.com');
	console.log(data.length);
})();
