import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

describe('toggle', () => {
	let container = null;
	beforeEach(() => {
		// configurar un elemento del DOM como objetivo del renderizado
		container = document.createElement('div');
		// container *debe* estar asociado a document para que los eventos funcionen correctamente.
		document.body.appendChild(container);
	});

	it('should show turn off text when state is true', () => {
		// arrange
		const buttonText = 'Turn off';
		const onChange = jest.fn();
		//act

		act(() => {
			render(<Toggle onChange={onChange} />, container);
		});

		const button = document.querySelector('[data-testid=toggle]');
		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		//assert
		expect(container.querySelector('[data-testid="toggle"]').textContent).toBe(
			buttonText.name
		);
	});

	afterEach(() => {
		// limpiar al salir
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
});
