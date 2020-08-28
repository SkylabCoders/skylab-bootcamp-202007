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
	return `Hola ${person.firstName} ${person.lastName}`;
}

function greeterStudent(student: Student): string {
	return `Hola ${student.fullName}`;
}

const user = { firstName: `Cara`, lastName: 'Cola' };
const student = new Student('Anna', 'V', 'Codina');

document.getElementById('title').innerText = greeter(student);
document.getElementById('title-student').innerText = greeterStudent(student);
