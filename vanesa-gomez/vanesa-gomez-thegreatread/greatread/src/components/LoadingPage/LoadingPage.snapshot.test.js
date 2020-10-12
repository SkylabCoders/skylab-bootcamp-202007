import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingPage from './LoadingPage';
describe('LoadingPage', () => {
    const loadingPageTree = renderer.create(
        <Router>
            <LoadingPage />
        </Router>
    );
    it('should match', () => {
        expect(loadingPageTree).toMatchSnapshot();
    });
});
