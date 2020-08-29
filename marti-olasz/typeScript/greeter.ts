interface Person {
	firstName: string;
	lastName: string;
}

function greeter(user: Person): string {
	return `Hello ${user.firstName} ${user.lastName}`;
}

const user = { firstName: 'Ruliando', lastName: 'klk' };
document.getElementById('title').innerText = greeter(user);
