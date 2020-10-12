import React from 'react';
import renderer from 'react-test-renderer';
import Portfolio from './Portfolio';

const tree = renderer.create(<Portfolio />).toJSON();

describe('Portfolio component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})