import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Product from './Product';

describe('Product', () => {
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
	it('should render a product', () => {
		const fakeProduct = { name: 'crema', price: 1.0 };

		act(() => {
			render(<Product product={fakeProduct} />, container);
		});

		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeProduct.name
		);

		expect(container.querySelector('[data-testid="price"]').textContent).toBe(
			`${fakeProduct.price} €`
		);
	});
	xit('should call onClick and go to the addToCart', () => {
		const addToCart = jest.fn();

		const fakeProduct = { name: 'crema', price: 1.0 };
		act(() => {
			render(<Product product={fakeProduct} />, container);
		});

		const img = document.querySelector('[data-testid="image"]');

		act(() => {
			img.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		expect(addToCart).toHaveBeenCalledTimes(1);
	});
});
