let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');

function Calculator() {
	let screenNumber = '';
	let accumulator = 0;
	let previousOperator = '';
	let screen = document.querySelector('.screen');
	let resultShown = false;

	function printNumberToScreen(number) {
		if (screenNumber.length === 11) {
			screenNumber = number;
		} else {
			if (number === '.') {
				if (screenNumber === '') {
					screenNumber = '0.';
				} else {
					if (!screenHasComa()) {
						screenNumber += number;
					}
				}
			} else {
				screenNumber += number;
			}
		}
		screen.innerHTML = screenNumber;
	}

	function doOperation(previousOperator) {
		switch (previousOperator) {
			case '+':
				break;
			case '-':
				break;
			case '*':
				debugger;
				if (!resultShown) {
					accumulator = +screenNumber;
					resultShown = true;
					clearScreen();
				} else {
					doTimes();
					printNumberToScreen(+accumulator.toFixed(3));
					screenNumber = '';
				}
				break;
			case '/':
				if (!resultShown) {
					accumulator = +screenNumber;
					resultShown = true;
					clearScreen();
				} else {
					doDivide();
					printNumberToScreen(+accumulator.toFixed(3));
					screenNumber = '';
				}

				break;
			default:
				return;
				break;
		}
	}

	function doDivide() {
		if (accumulator === 0) {
			accumulator = 1;
		}
		accumulator = accumulator / Number(screenNumber);
		clearScreen();
	}

	function doTimes() {
		if (accumulator === 0) {
			accumulator = 1;
		}
		accumulator = accumulator * Number(screenNumber);
		clearScreen();
	}

	function screenHasComa() {
		let result = false;
		for (const char of screenNumber) {
			if (char === '.') {
				result = true;
			}
		}
		return result;
	}

	function getClickedButtonValue(buttonElement) {
		let buttonValue = buttonElement.innerHTML;
		return buttonValue;
	}

	function clearScreen() {
		screen.innerHTML = '0';
		screenNumber = '';
	}

	function resetCalculator() {
		screen.innerHTML = '0';
		screenNumber = '';
		previousOperator = '';
		accumulator = 0;
		resultShown = false;
	}

	return {
		screen,
		screenNumber,
		accumulator,
		resultShown,
		getClickedButtonValue,
		printNumberToScreen,
		clearScreen,
		resetCalculator,
		doOperation
	};
}

const calculator = new Calculator();

// #### EVENTLISTENERS ####
for (const button of numberButtons) {
	button.addEventListener('click', function () {
		let numberInput = calculator.getClickedButtonValue(button);
		calculator.printNumberToScreen(numberInput);
	});
}

for (const button of operatorButtons) {
	button.addEventListener('click', function () {
		let operatorInput = calculator.getClickedButtonValue(button);
		console.log(operatorInput);
		switch (operatorInput) {
			case 'AC':
				calculator.resetCalculator();
				break;
			case 'C':
				calculator.clearScreen();
				break;
			case '÷':
				previousOperator = '/';
				break;
			case '×':
				previousOperator = '*';
				break;
			case '−':
				break;
			case '+':
				break;
			case '=':
				break;
		}
		calculator.doOperation(previousOperator);
	});
}
