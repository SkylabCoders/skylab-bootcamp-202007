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

class Address {
	constructor(public country: string, public cp: number, public city: string) {}
}

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
const myAddress = new Address('Bcn', 08026, 'Barcelona');
const user = new Student('Vanesa', 'C', 'Gómez', myAddress);
document.getElementById('title').innerText = greeter(user);
