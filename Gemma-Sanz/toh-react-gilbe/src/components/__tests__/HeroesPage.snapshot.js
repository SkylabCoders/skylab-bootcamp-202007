import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroesPage from '../HeroesPage';

describe('HeroPage snapshot', () => {
    const heroPageTree = renderer.create(
        <Router>
            <HeroesPage />
        </Router>);

    it('should match', () => {
        expect(heroPageTree.toJSON()).toMatchSnapshot();
    });
});