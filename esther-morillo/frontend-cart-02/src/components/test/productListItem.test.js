import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils'; 

import ProductListItem from '../ProductListItem';

describe('Product Component', () => {
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

    it('should render product component', () => {
        const fakeProduct = {
            productName: 'crema',
            price: 10.00
        };

        act(() => {
            render(<ProductListItem product={fakeProduct} />, container);
        })

        expect(container.querySelector('[data-testid="productName"]').textContent).toBe(fakeProduct.productName);
        expect(container.querySelector('[data-testid="price"]').textContent).toBe(`${fakeProduct.price}€`);
    });

    it('should go to action creator and send the product', () => {
        const addToCart = jest.fn();
        const fakeProduct = {
            productName: 'crema',
            price: 10.00
        };

        const setCheck = true;

        
        act(() => {
            render(<ProductListItem product={fakeProduct} />, container);
        })
        
        const button = document.querySelector('[data-testid="button"]');
        
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
        })

        expect(addToCart).toHaveBeenCalledTimes(1)

    })
})