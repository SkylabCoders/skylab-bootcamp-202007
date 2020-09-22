// const [first, ...restOfItems] = [10, 20, 30, 40];

// const newArray = [...restOfItems];

// console.log(first);
// console.log(restOfItems);

// const data = {
// 	temp1: '001',
// 	temp2: '0020',
// 	firstName: 'John',
// 	lastName: 'Bombasto'
// };

// const { temp1, temp2, ...myHero } = data;

// console.log(temp1);
// console.log(temp2);
// console.log(myHero);

// const newHero = { ...myHero };

// console.log(newHero);

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	greet() {
// 		console.log(`Que pasó ${this.name}`);
// 	}
// }

// class Hero extends Person {
// 	constructor(name, skill) {
// 		super(name);
// 		this.skill = skill;
// 	}

// 	greet() {
// 		console.log(`Hello ${this.name}`);
// 	}
// }
// const elBomba = new Person('Bombasto');
// const bombasto = new Hero('Bolbasto - el heroe', 'skylaber');
// const celeritas = new Hero('Celeritas', 'coder');
// elBomba.greet();
// bombasto.greet();
// celeritas.greet = () => console.log('Hola mundo');
// celeritas.greet();

const https = require('https');
const { Http2ServerRequest } = require('http2');
function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = '';
			response.on('data', (chunk) => (data = data + chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => resolve(error));
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
