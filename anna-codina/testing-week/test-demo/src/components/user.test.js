import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import User from './user';

describe('User', () => {
	let container = null;

	beforeEach(() => {
		// I can choose any element any element I want ex div.
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		container = null;
	});
	it('renders user data', async () => {
		// ARRANGE
		const fakeUser = {
			name: 'Bombasto',
			age: 31,
			address: 'Roc Boronat 35'
		};
		const id = '13';

		jest.spyOn(global, 'fetch').mockImplementation(() => {
			return Promise.resolve({
				json: () => Promise.resolve(fakeUser)
			});
		});

		// ACT
		await act(async () => {
			render(<User id={id} />, container);
		});

		// ASSERT
		expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
	});
});
