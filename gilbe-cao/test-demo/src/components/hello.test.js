import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './hello';

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
	});

	it('should render without a name', () => {
		// Arrange all required inputs
		const anonymousWelcome = 'Hey, stranger';

		// Act on the component
		act(() => {
			render(<Hello />, container);
		});

		// Assert
		expect(container.textContent).toEqual(anonymousWelcome);
	});

	it('should render with a name', () => {
		// Arrange all required inputs
		const myName = 'Skylab';
		const namedWelcome = 'Hello, Skylab!';

		// Act on the component
		act(() => {
			render(<Hello name={myName} />, container);
		});

		// Assert
		expect(container.textContent).toEqual(namedWelcome);
	});
});
