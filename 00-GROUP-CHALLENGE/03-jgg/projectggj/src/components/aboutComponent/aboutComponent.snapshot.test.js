import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutComponent from './aboutComponent';


describe('aboutComponent', () => {
    const aboutComponentTree = renderer.create(
        <Router>
            <AboutComponent />
        </Router>
    );
    it('should macth', () => {
        expect(aboutComponentTree).toMatchSnapshot();
    })
});