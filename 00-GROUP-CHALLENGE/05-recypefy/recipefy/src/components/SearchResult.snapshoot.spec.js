import renderer from 'react-test-renderer';
import SearchResult from './SearchResult';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
describe('SearchResult snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <SearchResult />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })
})