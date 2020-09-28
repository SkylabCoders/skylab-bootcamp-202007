import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';


describe('User', () => {
    let container = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it('should render product list', async () => {
        const productsList = [{
            id: 1,
            name: "Lajusticia colageno con magnesio 450comp",
            price: 14.35,
        },
        {
            id: 2,
            name: "Xhekpon crema facial 40ml",
            price: 6.49,
        }]

        jest.spyOn
    })
})