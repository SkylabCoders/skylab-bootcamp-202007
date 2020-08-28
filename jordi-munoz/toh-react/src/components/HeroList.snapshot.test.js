
import renderer from 'react-test-renderer';
import HeroList from './HeroList'
import React from 'react';

describe('HeroList snapshot', () => {
    const HeroTree = renderer.create(<HeroList />);

    it('should match', () => {
        expect(HeroTree.toJSON()).toMatchSnapshot();

    });
});