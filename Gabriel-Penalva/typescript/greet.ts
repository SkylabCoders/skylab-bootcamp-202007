interface Person {
	firstN: string;
	lastN: string;
}

const user = { firstN: 'gab', lastN: 'pe' };

function greet(pers: Person): string {
	return `Hello ${pers}`;
}

document.getElementById('title').innerText = greet(user);
