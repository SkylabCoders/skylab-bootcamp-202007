// const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log(first) //un valor
// console.log(restOfItems) //un array!!!!!!!!

// const data = {
//     temp1: '001',
//     temp2: '002',
//     firstName: 'John',
//     lastName: 'Bombasto'
// }

// const {firstName, lastName, ...myHero} = data;

// console.log(firstName)//strin
// console.log(lasttName)//string
// console.log(myHero)//objeto!!!!!!!!!!

// const newArray = [restOfItems]
// console.log(newArray)
// const newArray2 = [...restOfItems]
// console.log(newArray2)

// const newHero = {myHero};
// console.log(newHero)
// const newHero2 = {...myHero};
// // console.log(newHero2)
// ------------------------------------------------------
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	greet() {
// 		console.log(`Q pasó ${this.name}`);
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
// const bombasto = new Hero('Bombasto - el héroe', 'skylaber');
// const celeritas = new Hero('Celeritas', 'coder')

// celeritas.greet = () => console.log('Hola mundo')

// elBomba.greet();
// bombasto.greet();
// celeritas.greet()
// -------------------------------------------------------
//aqui consumimos datos de un servidor
const https = require('https');

function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = ''; //data es un evento, chunk es un pedazo de info. Get es lo que pillamos del servidor
			response.on('data', (chunk) => (data = data + chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => reject(error));
		});
	});
}

fetch('https://www.javascript.com/').then((data) => {
	console.log(data.length);
})(
	//declaramos e invocamos a la vez una fucnión asíncrona
	async function read() {
		const data = await fetch('https:/www.javascript.com');
		console.log(data.length);
	}
)();



