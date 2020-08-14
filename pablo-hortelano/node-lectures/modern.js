const [first, ...rest] = [10, 20, 30, 40];

const data = {
	temp: 001,
	temp2: 002,
	firstName: 'John',
	lastName: 'Bombasto'
};

const { temp, temp2, ...restOfProps } = data;

console.log(restOfProps);
