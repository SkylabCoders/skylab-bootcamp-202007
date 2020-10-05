import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './Toggle';

describe('Toggle test', () => {
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

	it('Should display Turn Off when state is true', () => {
		const buttonText = 'Turn off';
		const onChange = jest.fn();

		act(() => {
			render(<Toggle onChange={onChange} />, container);
		});

		const buttonElement = container.querySelector('[data-testid="toggle"]');

		act(() => {
			// Simulem el click al boto (aixi canvia el state a True i mostra Turn Off)
			buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		expect(buttonElement.textContent).toEqual(buttonText);
	});

	it('Should change button text when clicked', () => {
		act;
	});
});
