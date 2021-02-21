// test unitario de un componente de React
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './hello';

// set up before each test for unit testing:
describe('Hello', () => {
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	}); // the set up ends here

	it('should render without a name', () => {
		// Arrange or create all required inputs
		const anonymousWelcome = 'Hey stranger';

		//Act on the component
		act(() => {
			render(<Hello />, container);
		});
		expect();

		//Assert
		expect(container.textContent).toEqual(anonymousWelcome);
	});

	it('should render with a name', () => {
		// create or arrange all required inputs
		const myName = 'Skylab';
		const namedWelcome = 'Hello, Skylab!';

		//act on the component
		act(() => {
			render(<Hello name={myName} />, container);
		});
		expect();

		//assert
		expect(container.textContent).toEqual(namedWelcome);
	});
});
