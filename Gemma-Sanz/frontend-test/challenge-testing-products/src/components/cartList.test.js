import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import productStore from '../store/productStore';

import CartList from './CartList';

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
	xit('should load a list', () => {
		const fakeProduct = productStore.getCart();

		act(() => {
			render(<CartList />, container);
		});

		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			fakeProduct.name
		);
		expect(container.querySelector('[data-testid="price"]').textContent).toBe(
			`${fakeProduct.price} €`
		);
	});
});
