import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterComponent from './footerComponent';


describe('footerComponent', () => {
    const footerComponentTree = renderer.create(
        <Router>
            <FooterComponent />
        </Router>
    );
    it('should macth', () => {
        expect(footerComponentTree).toMatchSnapshot();
    })
});