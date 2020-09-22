class Student {
	fullName: string;

	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string,
		public address: Address
	) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

/* interface Address {
	country: string;
	cp: number;
	city: string;
} */

class Address {
	constructor(public country: string, public cp: number, public city: string) {}
}

/* interface Person {
	firstName: string;
	lastName: string;
	address: Address;
} */

class Person {
	constructor(
		public firstName: string,
		public lastName: string,
		public address: Address
	) {}
}

function greeter(person: Person): string {
	console.log(person);
	return `Hello ${person.firstName} ${person.lastName}`;
}
/* function greeter(person = { firstName: 'pepe', lastName: 'Manolo' }): string {
	return `Hello ${person.firstName} ${person.lastName}`;
} */

const myAddress = new Address('Bcn', 08024, 'Barcelona');
const user = new Student('Gilberto', 'V', 'Cao', myAddress);
//const user = {};

//document.getElementById('title').innerText = 'Hello Skylab Coders';
document.getElementById('title').innerText = greeter(user);
