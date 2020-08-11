import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileComponent from './profileComponent';


describe('profileComponent', () => {
    const profileComponentTree = renderer.create(
        <Router>
            <ProfileComponent />
        </Router>
    );
    it('should macth', () => {
        expect(profileComponentTree).toMatchSnapshot();
    })
});