function convertArrayToObject(array) {
	return array.reduce((accumulator, current) => {
		accumulator[current[0]] = current[1];
		return accumulator;
	}, {});
}

const obj = convertArrayToObject([
	[1, 'One'],
	[2, 'Two'],
	[3, 'Three'],
	[4, 'Four'],
	[5, 'Five']
]);

console.log(obj);
