interface Person {
	firstName: String;
	lastName: String;
	age: Number;
}

function greeter(person: Person): string {
	return `Hello ${person.firstName}`;
}

let user = { firstName: 'Esther', lastName: 'Morillo', age: 30 };
document.getElementById('title').innerHTML = greeter(user);
