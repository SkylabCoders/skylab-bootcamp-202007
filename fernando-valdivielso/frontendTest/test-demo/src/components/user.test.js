import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'; // funcion que envuelve el render
import User from './user';

describe('User', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div'); // usamos div porque nos da la gana
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('should render user name', async () => {
		// arrange -> preparamos los datos que necesitamos
		const fakeUser = {
			name: 'Bombasto',
			age: '31',
			address: 'Roc Boronat 35'
		};

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUser)
			})
		);
		// act
		// await act() === act().then
		await act(async () => {
			render(<User id="13" />, container);
		});

		//assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			// se pone entre [] por que es un selector de atributos de css o algo asi. div[data-testid="name"] seran los div que tienen ese atributo
			// data-testid="name" instead of 'summary' html tag. Asi podemos cambiar el elemento (a div por ejemplo) y el test sigue pasando
			// es u atributo que nos permite desacoplarnos de todo lo demas
			fakeUser.name
		);
		// expect(container.querySelector('strong').textContent).toBe(fakeUser.age); hacemos un expect por test, este deberia ponerse en otro 'it'

		global.fetch.mockRestore();
	});
});
