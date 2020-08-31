class Student {
	fullName: string;

	constructor( public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(name: Person): string {
	return `Hello SkylabCooderr ${person.firstName} ${person.lastName}`;
}

const skylaber = new Student ('santi', 'a', 'rob');

document.getElementById('title').innerHTML = greeter(skylaber);
