function removeSmallest(n, arr) {
	if (n > 0 && n < arr.length - 1) {
		const result = [...arr]
			.sort(function (a, b) {
				return a - b;
			})
			.slice(0, n);
		const copy = [...arr];
		return result.forEach((element) => {
			copy.splice(copy.indexOf(element), 1);
		});
	} else {
		return arr;
	}
}
