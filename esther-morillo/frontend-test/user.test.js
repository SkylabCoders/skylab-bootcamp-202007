import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils'; 

import User from './user';

describe('User', () => {
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

    it('render user data', async () => {
        const fakeUser = {
            name: 'Bombasto', 
            age: '31',
            address: 'Roc Boronat 35'
        };

        jest.spyOn(global, 'fetch').mockImplementation(() => {
            Promise.resolve({
                json: () => Promise.resolve(fakeUser)
            })
        });

        await act(async () => {
            render(<User id="13" />, container);
        });

        expect(container.querySelector('[data-testid="name"]').textContent).toBe(fakeUser.name);
        expect(container.querySelector('strong').textContent).toBe(fakeUser.age);

        global.fetch.mockRestore(); 
    });
})


