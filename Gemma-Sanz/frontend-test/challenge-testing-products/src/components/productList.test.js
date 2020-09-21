import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Products from '../actions/productActions';

describe('Products', () => {
	it('should load a list of products', () => {
		const fakeProduct = { name: 'dentrifico', price: 12 };

		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeProduct)
			})
        );
        await act (async ()=>{
            render(<Product />, container)
        })

        expect(container.querySelector('[data-testid="name"]').textContent).toBe(fakeProduct.name)
	});
});
