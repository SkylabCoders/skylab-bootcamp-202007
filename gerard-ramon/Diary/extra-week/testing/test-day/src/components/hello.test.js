import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './Hello';

xdescribe('something to describe', () => {
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

	it('Should render without a name', () => {
		// Arrange requiered imputs
		const anonymousWelcome = 'Hey, stranger';
		// Act on the component
		act(() => {
			render(<Hello />, container);
		});

		// Assert
		expect(container.textContent).toEqual(anonymousWelcome);
	});

	it('Should render without a name', () => {
		// Arrange requiered imputs
		const myName = 'Skylab';
		const anonymousWelcome = 'Hello, Skylab!';
		// Act on the component
		act(() => {
			render(<Hello name={myName} />, container);
		});

		// Assert
		expect(container.textContent).toEqual(anonymousWelcome);
	});
});
