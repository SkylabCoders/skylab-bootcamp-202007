function customFib(signature, indexes, n) {
	const resultArray = signature;
	for (let i = 0; i < n; i++) {
		let acc = 0;
		indexes.forEach((element) => {
			acc += resultArray[element + i];
		});
		resultArray.push(acc);
	}
	console.log(resultArray);
	return resultArray[n];
}

console.log(customFib([0], [0, 0], 15));
