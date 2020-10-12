import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
describe('Header', () => {
    const headerTree = renderer.create(
        <Router>
            <Header />
        </Router>
    );
    it('should match', () => {
        expect(headerTree).toMatchSnapshot();
    });
});
