import React from 'react';
import renderer from 'react-test-renderer';
import Signup from './Signup';

const tree = renderer.create(<Signup />).toJSON();

describe('Signup component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})