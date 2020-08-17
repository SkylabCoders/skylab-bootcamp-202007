/*
const [first, ...restOfItems] = [10, 20, 30, 40, 50];
console.log(first);
console.log(restOfItems);

const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'Jhon',
	lastName: 'Bombasto'
};
const { lastName } = data;
console.log(lastName);

class Person {
	constructor(name) {
		this.name = name;
	}
	greet() {
		console.log(`Hello ${this.name}`);
	}
}

class Hero extends Person {
	constructor(name, skills) {
		super(name);
		this.skills = skills;
	}
	greet() {
		console.log(`KLK hermanos, aqui ${this.name}`);
	}
}

const elBomba = new Person('elBomba');
const bombasto = new Hero('Bombasto', 'Clean code');

elBomba.greet();
bombasto.greet();
*/

const https = require('https');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = '';
			response.on('data', (chunk) => (data += chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => rejected(error));
		});
	});
}

fetch('https://www.javascript.com').then((data) => {
	console.log('.then: ' + data.length);
});

(async function read() {
	const data = await fetch('https://www.javascript.com');
	console.log('async await: ' + data.length);
})();
