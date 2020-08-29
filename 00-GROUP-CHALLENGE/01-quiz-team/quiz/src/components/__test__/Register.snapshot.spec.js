import React from 'react';
import renderer from 'react-test-renderer';
import Register from './../Register';

const tree = renderer.create(<Register />).toJSON();

describe('Register snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})