import renderer from 'react-test-renderer';
import React from 'react'
import HeroList from '../HeroList';


describe('Detail snapshot', () => {
    const tree = renderer.create(<HeroList />);

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
})