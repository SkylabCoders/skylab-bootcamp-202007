import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroDetail from '../HeroDetail';

describe('HeroDetail snapshot', () => {

    const props = {
        match: {
            params: {
                heroId: 14
            }
        }
    };
    const heroDetailTree = renderer.create(
        <Router>
            <HeroDetail {...props} />
        </Router>
    );

    it('should match', () => {
        expect(heroDetailTree).toMatchSnapshot();
    });
});