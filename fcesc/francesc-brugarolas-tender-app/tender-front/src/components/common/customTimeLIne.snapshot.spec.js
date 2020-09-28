import React from 'react';
import renderer from 'react-test-renderer';
import CustomTimeLine from './CustomTimeLine';

const tree = renderer.create(<CustomTimeLine />).toJSON();

describe('CustomTimeLine component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})