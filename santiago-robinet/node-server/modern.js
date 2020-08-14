/*const [first,...restOfItems] = [10 ,20, 30, 40];

const newArr = [...restOfItems];
console.log(newArr);


const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Bombasto'
}

// const {firstName, lastName, ...restOfprops} = data;
const {temp1, temp2, ...myHero} = data;

const newHero = {...myHero}


console.log(newHero);

class Person {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Que paso ${this.name}!`);
    }
}

class Hero extends Person{
    constructor(name, skill){
        super(name);
        this.skill = skill;

    }

    greet(){
        console.log(`Hello ${this.name}!`);
    }
}

const elBomba = new Person('Bombasto');
const bombasto = new Hero ('Bombasto - el heroe', 'skylaber');
const celeritas = new Hero ('Celeritas', 'coder');


celeritas.greet = () => console.log('Hola Mundo!!')

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

//funcion de ejecucion inmediata.. quiere decir que la funcion se va a ejecutar inmediatamente

(async function read() {
	const data = await fetch('https://www.javascript.com');
	console.log(data.length);
})();
