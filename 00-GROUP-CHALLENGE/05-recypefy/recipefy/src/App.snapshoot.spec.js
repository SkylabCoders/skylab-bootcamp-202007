import renderer from 'react-test-renderer';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
describe('App snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })
})