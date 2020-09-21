import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProductList from '../components/ProductList';

describe('Product List', () => {
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

	it('should render product name', async () => {
		//arrange
		const fakeProduct = {
			name: 'Cremita buena',
			price: 20,
			image: 'imagen'
		};

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeProduct)
			})
		);

		//act
		await act(async () => {
			render(<ProductList />, container);
		});

		//assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeProduct.name
		);

		global.fetch.mockRestore();
	});
});
