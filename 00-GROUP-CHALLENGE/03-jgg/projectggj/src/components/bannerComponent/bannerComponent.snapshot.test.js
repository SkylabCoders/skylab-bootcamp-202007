import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BannerComponent from './bannerComponent';


describe('bannerComponent', () => {
    const bannerComponentTree = renderer.create(
        <Router>
            <BannerComponent />
        </Router>
    );
    it('should macth', () => {
        expect(bannerComponentTree).toMatchSnapshot();
    })
});