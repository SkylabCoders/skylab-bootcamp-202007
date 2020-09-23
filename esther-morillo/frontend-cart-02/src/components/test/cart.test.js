import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils'; 

import User from '../Cart';

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
        const fakeCart = {
            image: '',
            productName: 'crema',
            price: 10,00
        };

        jest.spyOn(global, 'fetch').mockImplementation(() => {
            Promise.resolve({
                json: () => Promise.resolve(fakeUser)
            })
        });

        await act(async () => {
            render(<Cart productName="crema" />, container);
        });

        expect(container.querySelector('[data-testid="image"]').textContent).toBe(fakeUser.image);
        expect(container.querySelector('p').textContent).toBe(fakeUser.productName);
        expect(container.querySelector('p').textContent).toBe(fakeUser.price);

        global.fetch.mockRestore(); 
    });
})