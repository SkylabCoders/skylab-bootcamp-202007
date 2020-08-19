import renderer from 'react-test-renderer';
import React from 'react';
import HeroList from './HeroList';
const tree = renderer.create(
    <HeroList />
)

describe('Hero List Snapshot', function () {
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

});