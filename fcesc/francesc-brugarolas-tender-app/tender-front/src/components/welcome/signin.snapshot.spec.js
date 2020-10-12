import React from 'react';
import renderer from 'react-test-renderer';
import Signin from './Signin';

const tree = renderer.create(<Signin />).toJSON();

describe('Signin component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})