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

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('should show Turn off text when state is true', () => {
		const buttonText = 'Turn off';
		const onchange = jest.fn();

		act(() => {
			render(<Toggle onchange={onchange} />, container);
        });
        
        const button =  document.querySelector('[data-testid="toggle"]')

		act(() => {
			button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
		});

		expect(document.querySelector('[data-testid="toggle"').textContent).toBe(
			buttonText
		);
	});
});
