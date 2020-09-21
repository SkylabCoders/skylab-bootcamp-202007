import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from './user';

describe('user', () => {
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

	it('renders user data', async () => {
		//arrange
		const fakeUser = {
			name: 'Bombasto',
			age: '31',
			address: 'roc boronat'
		};

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUser)
			})
		);
		//act
		await act(async () => {
			render(<User id="123" />, container);
		});
		//assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeUser.name
		);
	});
});
