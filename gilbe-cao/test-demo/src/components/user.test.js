import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import User from './user';

describe('User', () => {
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

	it('should render user name', async () => {
		// arrange
		const fakeUser = {
			name: 'Bombasto Hero',
			age: '31',
			address: 'Roc Boronat 35'
		};

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUser)
			})
		);

		// act
		await act(async () => {
			render(<User id="13" />, container);
		});

		// assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeUser.name
		);

		global.fetch.mockRestore();
	});
});
