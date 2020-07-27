const Intern = {
	displayName: 'Ben',
	age: 21,
	job: 'Software Engineer Intern',
	get props() {
		return this;
	}
};

console.log('************* before');
console.log('Object properties => ', Object.keys(Intern.props));

delete Intern.displayName;

console.log('************* after');

console.log('Object properties => ', Object.keys(Intern.props));
