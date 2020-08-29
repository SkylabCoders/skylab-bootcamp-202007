import renderer from 'react-test-renderer';
import Main from './Main';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
describe('Main snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })
})