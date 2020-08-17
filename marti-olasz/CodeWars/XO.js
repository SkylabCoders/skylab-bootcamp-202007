function XO(str) {
	const count = { x: 0, o: 0 };
	str
		.toLowerCase()
		.split('')
		.map((element) => count[element]++);
	return count.x === count.o;
}

console.log(XO('xooxox'));
