import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Product from './Product';

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
		// global.fetch.mockRestore();
	});
	it('should load a list of product name', async () => {
		/* 
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeProduct)
			})
		); */
		const fakeProduct = { name: 'dentrifico', price: 12 };
		const onSubmit = jest.fn();

		act(() => {
			return render(
				<Product product={fakeProduct} onSubmit={onSubmit} />,
				container
			);
		});

		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeProduct.name
		);

		expect(container.querySelector('[data-testid="price"]').textContent).toBe(
			fakeProduct.price
		);
	});
	it('should setState to true and on Submit send the product with onClick', () => {
		const fakeProduct = { name: 'dentrifico', price: 12 };
		const onSubmit = jest.fn();

		let state = false;
		act(() => {
			return render(
				<Product product={fakeProduct} onSubmit={onSubmit} />,
				container
			);
		});

		const img = document.querySelector('[data-testid="image"]');

		act(() => {
			img.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(state).toBe(true);
	});
});
