import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Hello from './hello';
import React from 'react';

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
		// ARRANGE all required inputs  (optionals)
		const anonymousWelcome = 'Hey, stranger';
		// ACT on the component
		act(() => {
			render(<Hello />, container);
		});

		// ASSERT
		expect(container.textContent).toEqual(anonymousWelcome);
	});
	it('should render with a name', () => {
		// ARRANGE all required inputs  (optionals)
		const name = 'bombasto';
		const nameWelcome = `Hello, bombasto`;
		// ACT on the component
		act(() => {
			render(<Hello name={name} />, container);
		});

		// ASSERT
		expect(container.textContent).toEqual(nameWelcome);
	});
});
