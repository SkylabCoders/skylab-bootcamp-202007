import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroListItem from '../HeroListItem';

describe('HeroListItem snapshot', () => {
    const heroListItemTree = renderer.create(<Router><HeroListItem /></Router>);

    it('should match', () => {
        expect(heroListItemTree.toJSON()).toMatchSnapshot();
    });
});