import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toogle';

describe('Toggle', () => {
	let container = null;
	{
		beforeEach(() => {
			container = document.createElement('div');
			document.body.appendChild(container);
		});
		afterEach(() => {
			unmountComponentAtNode(container);
			container.remove();
			container = null;
		});

		it('should show Turn off text when state is true', () => {
			// ARRANGE
			const buttonText = 'turn off';
			const onChange = jest.fn();
			// ACT
			act(() => {
				render(<Toggle onChange={onChange} />, container);
			});
			const button = document.querySelector('[data-testid="toggle"]');

			act(() => {
				button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			});
			// ASERTS

			expect(button.textContent).toBe(buttonText);
		});
	}
});
