import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeComponent from './homeComponent';


describe('homeComponent', () => {
    const homeComponentTree = renderer.create(
        <Router>
            <HomeComponent />
        </Router>
    );
    it('should macth', () => {
        expect(homeComponentTree).toMatchSnapshot();
    })
});