//REPÀS SPREAD OPERATOR
//Array destructuring assignment
const [first, , ...restOfItems] = [10, 20, 30, 40];

console.log('first =====>', first);
console.log('restOfItems =====>', restOfItems);

//Object destructuring assignment?
//el rest aqui agrupa todas las propiedades que no coincidan en otro objeto
const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'John',
	lastName: 'Bombasto'
};
//aqui los 3 puntos es rest operator
/* const { temp1, temp2, ...myhero } = data;
console.log(temp1);
console.log(temp2);
console.log(myhero);
 */
//
/* const [first, ...restOfItems] = [10, 20, 30, 40];

const newArray = [...restOfItems];
console.log(newArray); // [20, 30, 40] */

//Mismo ejemplo pero con hero

const { temp1, temp2, ...myhero } = data;

//Aqui estamos evitando la mutabilidad, newHero y myHero son objectos distintos
const newHero = { ...myhero };
console.log(newHero);
console.log(newHero === myhero);

//REPÀS CLASS
class Person {
	constructor(name) {
		//Si volem que aquesta propietat de name es quedi a la classe hem de posar el this
		this.name = name;
	}
	greet() {
		console.log(`Que pasó ${this.name}!`);
	}
}

class Hero extends Person {
	constructor(name, skill) {
		//para inicializar el nombre le ponemos super, para que lo coga de la classe extendida, asi no hace falta que hagamos this.name=name
		super(name);
		this.skill = skill;
	}

	greet() {
		console.log(`Hello ${this.name}`);
	}
}
//podemos extender una classe ccon super que coge los parametros de la classe extendida, o podemos poner otros y redefinirlos
const elBomba = new Person('Bombasto');
const bombasto = new Hero('Bombasto - el héroe', 'skylaber');
const celeritas = new Hero('Celeritas', 'coder');

//como Hero ya tiene greet(), podemos redefinirlo aquí y que haga salude de una forma distinta, aqui como es una arrow function el this pierde el scope, y skill es undefine, con una function tradicional sí coge el skill coder de celeritas
celeritas.greet = () => console.log('Hola Mundo!' + this.skill);

/* celeritas.greet = function () {
	console.log(`Hola Mundo! ${this.skill}`);
}; */

elBomba.greet();
bombasto.greet();
celeritas.greet();
