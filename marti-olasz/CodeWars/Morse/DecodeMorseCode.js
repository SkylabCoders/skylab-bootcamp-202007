function decodeMorse(morseCode) {
	const words = morseCode.split('   ');
	const spreadLetter = new Array(words.length);
	words.map((element, i) => {
		spreadLetter[i] = element.split(' ');
	});
	const result = spreadLetter.map((element) =>
		element.map((element) => MORSE_CODE[element])
	);
	const final = result.map((element) => element.join('')).join(' ');
	return final.trim();
}

decodeMorse('.... . -.--');
