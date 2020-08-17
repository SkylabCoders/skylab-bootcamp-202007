import renderer from 'react-test-renderer';
import Header from './Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
describe('Header snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })
})