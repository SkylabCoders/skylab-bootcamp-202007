describe('Calculator', function () {
	let calculator;

	beforeEach(function () {
		calculator = new Calculator();
	});

	it('Should not allow more than 12 characters in the screen', function () {
		let length = 12;
		calculator.screenNumber = '111111111111';
		console.log(calculator.screenNumber);
		calculator.printNumberToScreen('1');
		expect(calculator.screenNumber.length).toBe(length);
	});

	it('Should not let the user introduce more than one coma', function () {
		let expectedResult = '1.2';
		calculator.screenNumber = '1.2';
		debugger;
		calculator.screenNumber = calculator.printNumberToScreen(
			'.',
			calculator.screenNumber
		);
		expect(calculator.screenNumber).toBe(expectedResult);
	});

	it('Should insert a 0, when no number in the screen and user clicks in <,> button', function () {
		calculator = new Calculator();
		calculator.screenNumber = '';
		calculator.screenNumber = calculator.printNumberToScreen('.');
		expect(calculator.screenNumber).toBe('0.');
	});

	it('Should add 2 numbers given by the user when clicking <+> button', function () {
		calculator.screenNumber = '10';
		calculator.doSum('2');
		expect(calculator.screenNumber).toBe('12');
	});

	it('Should rest 2 numbers given by the user when clicking <-> button', function () {
		calculator.screenNumber = '10';
		calculator.doRest('2');
		expect(calculator.screenNumber).toBe('10');
	});

	it('Should multiply 2 numbers given by the user when clicking <*> button', function () {
		calculator.screenNumber = '10';
		calculator.doTimes('2');
		expect(calculator.screenNumber).toBe('20');
	});

	it('Should divide 2 numbers given by the user when clicking </> button', function () {
		calculator.screenNumber = '10';
		calculator.doDivide('2');
		expect(calculator.screenNumber).toBe('5');
	});

	it('Should erase the number on the screen when clicking <C> button', function () {
		calculator.screenNumber = '10';
		calculator.clearScreen();
		expect(calculator.screenNumber).toBe('');
	});

	fit('Should reset the current operation when clicking <AC> button', function () {
		calculator.accumulator = 10;
		calculator.resetCalculator();
		expect(calculator.accumulator).toBe(0);
	});

	it('Should round the decimal operations to 3 decimals.', function () {
		calculator.screenNumber = '5';
		calculator.doDivide('2');
		expect(calculator.screenNumber).toBe('2.500');
	});
});
