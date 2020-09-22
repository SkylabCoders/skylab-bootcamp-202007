import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

describe('Toggle', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	it('should show Turn off text when state is true', () => {
		// arrange
		const buttonText = 'Turn off';
		const onChange = jest.fn();

		// act
		act(() => {
			render(<Toggle onChange={onChange} />, container);
		});

		const button = document.querySelector('[data-testid="toggle"]');

		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		// assert
		expect(button.textContent).toBe(buttonText);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
});
