import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from './navComponent';


describe('navComponent', () => {
    const navComponentTree = renderer.create(
        <Router>
            <NavComponent />
        </Router>
    );
    it('should macth', () => {
        expect(navComponentTree).toMatchSnapshot();
    })
});