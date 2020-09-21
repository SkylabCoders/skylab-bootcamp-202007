import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

describe('Toggle', () => {
	let container = null;
	const onChange = jest.fn();

	// set up
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	it('should show Turn off text when state is true', () => {
		//arrange
		const buttonText = 'Turn off';

		//act
		act(() => {
			render(<Toggle onChange={onChange} />, container); // render the toggle component in the container
		});

		const button = document.querySelector('[data-testid="toggle"]');

		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		//assert
		expect(button.textContent).toBe(buttonText);
	});

	// tear down
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove(); // remove es un metodo de html
		container = null;
	});
});
