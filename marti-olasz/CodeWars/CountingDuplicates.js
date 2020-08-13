function duplicateCount(text) {
	const letterCount = {};
	text
		.toLowerCase()
		.split('')
		.map((letter) => {
			if (!!letterCount[letter]) {
				letterCount[letter]++;
			} else {
				letterCount[letter] = 1;
			}
		});
	const letter = [];
	for (const [key, value] of Object.entries(letterCount)) {
		if (value > 1) {
			letter.push(key);
		}
	}
	return letter.length;
}
