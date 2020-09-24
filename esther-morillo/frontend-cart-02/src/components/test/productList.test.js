import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils'; 

import ProductList from '../ProductList';

describe('Product List Component', () => {
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

    it('should render product list component', () => {
        act(() => {
            render(<ProductList />, container);
        })

        expect(true).toBe(true);
    })
})