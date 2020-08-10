import renderer from 'react-test-renderer';
import React from 'react';
import Details from './Details';
const tree = renderer.create(
    <Details />
)

describe('App Snapshot', function () {
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

});