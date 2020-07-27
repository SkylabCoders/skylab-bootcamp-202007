let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let previousOperator = '';

function Calculator() {
	let screenNumber = '';
	let accumulator = 0;
	let screen = document.querySelector('.screen');
	let resultShown = false;

	function printNumberToScreen(number, scrNumber) {
		//screenNumber = scrNumber;
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
		scrNumber = screenNumber;
		return scrNumber;
	}

	function doOperation(previousOperatorParam) {
		switch (previousOperatorParam) {
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
					printNumberToScreen(+accumulator.toFixed(3), screenNumber);
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
					screenNumber = printNumberToScreen(
						+accumulator.toFixed(3),
						screenNumber
					);
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
		doOperation,
		screenHasComa
	};
}

const calculator = Calculator();

// #### EVENTLISTENERS ####
for (const button of numberButtons) {
	button.addEventListener('click', addEventListenerToNumberButton);
}

function addEventListenerToNumberButton() {
	let numberInput = calculator.getClickedButtonValue(button);
	calculator.printNumberToScreen(numberInput, calculator.screenNumber);
}

for (const button of operatorButtons) {
	button.addEventListener('click', addEventListenerToOperatorButton);
}

function addEventListenerToOperatorButton() {
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
}
