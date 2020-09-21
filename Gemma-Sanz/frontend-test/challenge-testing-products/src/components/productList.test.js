import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProductList from '../components/ProductList';

describe('Products', () => {
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
		global.fetch.mockRestore();
	});
	it('should load a list of product name', async () => {
		const fakeProduct = { name: 'dentrifico', price: 12 };

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeProduct)
			})
		);
		await act(async () => {
			render(<ProductList />, container);
		});

		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeProduct.name
		);
	});
});
