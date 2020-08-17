Array.prototype.groupBy = function (fn = null) {
	const result = {};
	if (fn === null) {
		this.forEach((element) => {
			!!result[element]
				? result[element].push(element)
				: (result[element] = [element]);
		});
	} else {
		this.forEach((element) => {
			!!result[fn(element)]
				? result[fn(element)].push(element)
				: (result[fn(element)] = [element]);
		});
	}
	return result;
};
