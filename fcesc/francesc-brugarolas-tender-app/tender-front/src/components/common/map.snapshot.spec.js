import React from 'react';
import renderer from 'react-test-renderer';
import Map from './Map';

const tree = renderer.create(<Map />).toJSON();

describe('Map component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})