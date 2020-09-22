function disemvowel(str) {
	let result = '';
	for (let char of str) {
		if (!'aeiouAEIOU'.includes(char)) {
			result += char;
		}
	}
	return result;
}
