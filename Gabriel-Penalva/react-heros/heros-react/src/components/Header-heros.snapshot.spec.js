import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header-heros'
const tree = renderer.create(
    <Header />
)

describe('Hero List Snapshot', function () {
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

});