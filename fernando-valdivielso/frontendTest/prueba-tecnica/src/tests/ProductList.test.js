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

		//act
		await act(async () => {
			render(<ProductList />, container);
		});

		//assert
		expect(container.querySelector('[data-testid="name"]').textContent).toBe(
			'LaJusticia colágeno con magnesio 450comp'
		);
	});
});
