import React from 'react';
import renderer from 'react-test-renderer';
import ShowImage from './../ShowImage';

const tree = renderer.create(<ShowImage />).toJSON();

describe('ShowImage snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
