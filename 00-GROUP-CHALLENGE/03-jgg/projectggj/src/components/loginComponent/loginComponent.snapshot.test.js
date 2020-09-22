import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './loginComponent';


describe('loginComponent', () => {
    const loginComponentTree = renderer.create(
        <Router>
            <LoginComponent />
        </Router>
    );
    it('should macth', () => {
        expect(loginComponentTree).toMatchSnapshot();
    })
});