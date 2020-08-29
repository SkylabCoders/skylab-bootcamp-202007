function calculator(num1, num2) {
	if (typeof num1 === 'undefined') {
		console.log(enteroDec(Math.sqrt(num2)));
	} else if (typeof num1 !== 'number') {
		console.log(
			'El valor introducido no es numérico, porfavor introduce un valor numérico.'
		);
	} else if (typeof num2 === 'undefined') {
		console.log(enteroDec(Math.sqrt(num1)));
	} else if (typeof num2 !== 'number') {
		console.log(
			'El valor introducido no es numérico, porfavor introduce un valor numérico.'
		);
	} else {
		var result = [];
		result = [num1 + num2, num1 - num2, num1 / num2, num1 * num2];
		console.log(
			`${num1} + ${num2} = ${enteroDec(
				result[0]
			)}, ${num1} - ${num2} = ${enteroDec(
				result[1]
			)}, ${num1} / ${num2} = ${enteroDec(
				result[2]
			)}, ${num1} * ${num2} = ${enteroDec(result[3])}`
		);
	}
}

function enteroDec(x) {
	if (x - Math.floor(x) === 0) {
		return x;
	} else {
		return x.toFixed(3);
	}
}
