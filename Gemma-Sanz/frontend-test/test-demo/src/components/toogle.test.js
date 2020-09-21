import React, { useState } from 'react';

// UnmountCompoenentAtNode lo usamos para poder desmontar componente container creado
import { render, unmountComponentAtNode } from 'react-dom';
// Act lo usamos para envolver todo el ciclo de vida del componente
import { act } from 'react-dom/test-utils';
import Toogle from './toogle';
import Toggle from './toogle';

describe('Toggle', () => {
	let container = null;

	// SETUP
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	// TEAR DOWN
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('should show Turn off text when state is true', () => {
		// Arrange
		const buttonText = 'Turn off';
		const onChange = jest.fn();

		// Act
		act(() => {
			render(<Toggle onChange={onChange} />, container);
		});

		const button = document.querySelector('[data-testid="toogle"]');

		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		// Assert
		expect(button.textContent).toBe(buttonText);
		//		expect(true).toBe(true);
	});
});
