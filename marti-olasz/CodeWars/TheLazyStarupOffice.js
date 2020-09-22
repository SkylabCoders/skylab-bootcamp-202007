function binRota(arr) {
	result = [];
	arr.forEach((element, i) => {
		if (i % 2 !== 0) {
			result.push(...element.reverse());
		} else {
			result.push(...element);
		}
	});
	return result;
}
