import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils'; 

import Cart from '../Cart';
import CartItem from '../CartItem';

describe('Cart', () => {
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

    it('render cart', async () => {
        const fakeProduct = {
            image: '',
            productName: 'crema',
            price: 10.00
        };

        act(() => {
            render(<Cart />, container);
        });

        act(() => {
            render(<CartItem 
                image={fakeProduct.image}
                productName={fakeProduct.productName}
                price={fakeProduct.price}
                />, container);
        });

      /*  expect(container.querySelector('[data-testid="image"]').textContent).toBe(fakeUser.image);
        expect(container.querySelector('p').textContent).toBe(fakeUser.productName);
        expect(container.querySelector('p').textContent).toBe(fakeUser.price);  */

        
    });
})