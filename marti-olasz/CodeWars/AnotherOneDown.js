function removeSmallest(n, arr) {
	if (n > 0) {
		result = [...arr]
			.sort(function (a, b) {
				return a - b;
			})
			.slice(n);
		return (difference = arr.filter((x) => result.includes(x)));
	} else {
		return arr;
	}
}
console.log(removeSmallest(2, [5, 3, 2, 1, 4]));
