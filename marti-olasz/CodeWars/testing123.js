var number = function (array) {
	return array.map((element, i) => {
		return `${i + 1}: ${element}`;
	});
};
