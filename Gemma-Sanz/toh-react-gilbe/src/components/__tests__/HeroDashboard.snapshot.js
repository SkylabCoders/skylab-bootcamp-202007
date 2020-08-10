import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroDashboard from '../HeroDashboard';

describe('HeroDashboard snapshot', () => {
    const heroDashboardTree = renderer.create(
        <Router>
            <HeroDashboard />
        </Router>
    );

    it('should match', () => {
        expect(heroDashboardTree.toJSON()).toMatchSnapshot();
    });
});