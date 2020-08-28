class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
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
const user = new Student('Gilberto', 'V', 'Cao');

document.getElementById('title').innerHTML = greeter(user);
