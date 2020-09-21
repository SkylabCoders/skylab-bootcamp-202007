import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// Act envuelve al render para poder realizar todas las afirmaciones de un componente y poder testearlas

import User from './user';

describe('User', () => {
	// Boilerplate
	let container = null;
	beforeEach(() => {
		// Usamos div como podriamos usar cualquier otra cosa, podriammos usar igual una table, una seccion, un span,...
		container = document.createElement('div');
		// Añadimos este div al body
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	it('should render user name', async () => {
		// Arrange, preparamos los datos que necesitamos

		const fakeUser = {
			name: 'Bombasto Hero',
			age: '31',
			address: 'Roc Boronat 35'
		};
		// Así moqueamos un modulo de npm. Espiamos a  fetch, moqueamos su implementacion para que sea una promesa, con una promesa que siempre se resuelva y tiene un json que retorna auna promesa y se resuelve con el objeto de arriba
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUser)
			})
		);
		// Act
		await act(async () => {
			render(<User id="13" />, container);
		});

		// Assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeUser.name
		);

		// Para hacer otro expect de otra cosa seria así, estructurando otra vez todo el it
		expect(container.querySelector('strong').textContent).toBe(fakeUser.age);

		// Aquí al final del test restaurem la implementació original de un mock, ho podriem fer al afterEach, pero aquí si només evaluem un it ho podriem fer aquí mateix
		global.fetch.mockRestore();
	});
});
