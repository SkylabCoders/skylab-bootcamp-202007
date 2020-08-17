import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterComponent from './registerComponent';


describe('registerComponent', () => {
    const registerComponentTree = renderer.create(
        <Router>
            <RegisterComponent />
        </Router>
    );
    it('should match', () => {
        expect(registerComponentTree).toMatchSnapshot();
    });
})