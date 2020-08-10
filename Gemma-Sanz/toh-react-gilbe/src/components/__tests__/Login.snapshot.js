import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login';

describe('Login snapshot', () => {
    const loginTree = renderer.create(
        <Router>
            <Login />
        </Router>
    );

    it('should match', () => {
        expect(loginTree.toJSON()).toMatchSnapshot();
    });
});