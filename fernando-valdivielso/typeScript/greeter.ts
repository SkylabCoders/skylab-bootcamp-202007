class Student {
	fullName: string;

	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		// inyeccion de dependencias
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person): string {
	return `Hello ${person.firstName} ${person.lastName}`;
}

const user = new Student('Fer', 'V', 'Leon');

document.getElementById('title').innerText = greeter(user);
