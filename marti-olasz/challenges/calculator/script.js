const findDot = function (num) {
	if (num === ',') {
		return true
	} else {
		return false
	}
}

function calculator() {
	let number = 0
	let operator = '+'
	const add = function (num) {
		let val = document.querySelector('.calculator__header').innerHTML
		if (num === ',' && ![...val].some(findDot)) {
			document.querySelector('.calculator__header').innerHTML += num
		} else {
			if (val === '0') {
				document.querySelector('.calculator__header').innerHTML = null
			}
			switch (num) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.querySelector('.calculator__header').innerHTML += num
					break
				default:
					console.log('bad input')
					break
			}
		}
	}
	const reset = function () {
		document.querySelector('.calculator__header').innerHTML = 0
	}
	const operation = function (symbol) {
		let input = +document.querySelector('.calculator__header').innerHTML
		number = calc(number, input, operator)
		document.querySelector('.calculator__header').innerHTML = 0
		operator = symbol
	}
	const calc = function (a, b, symbol) {
		switch (symbol) {
			case '+':
				result = a + b
				break
			case '-':
				result = a - b
				break
			case '*':
				result = a * b
				break
			case '/':
				result = a / b
				break

			default:
				result = 'error'
				break
		}
		return result
	}
	const solve = function () {
		let input = +document.querySelector('.calculator__header').innerHTML
		document.querySelector('.calculator__header').innerHTML = calc(
			number,
			input,
			operator
		)
		number = 0
	}

	return { add, reset, operation, calc, solve }
}
const calc = calculator()
