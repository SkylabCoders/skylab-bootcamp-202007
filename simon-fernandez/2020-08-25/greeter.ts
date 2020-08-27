class Hero {
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

function greeter(name: Person): string {
	return `Fuck you Celeritas Best regards ${name.firstName} ${name.lastName}`;
}

const user = new Hero('Narco', 'N', 'el Capo');

document.getElementById('title').innerText = greeter(user);
