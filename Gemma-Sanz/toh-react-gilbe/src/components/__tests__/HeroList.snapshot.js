import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroList from '../HeroList';

describe('HeroList snapshot', () => {
    const heroListTree = renderer.create(
        <Router>
            <HeroList />
        </Router>
    );

    it('should match', () => {
        expect(heroListTree.toJSON()).toMatchSnapshot();
    });
});