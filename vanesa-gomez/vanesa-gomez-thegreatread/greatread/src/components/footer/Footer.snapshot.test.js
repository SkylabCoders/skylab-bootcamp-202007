import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
describe('Footer', () => {
    const footerTree = renderer.create(
        <Router>
            <Footer />
        </Router>
    );
    it('should match', () => {
        expect(footerTree).toMatchSnapshot();
    });
});
