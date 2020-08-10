import React from 'react';
import renderer from 'react-test-renderer';
import DisplayInlineArray from './../DisplayInlineArray';

const tree = renderer.create(<DisplayInlineArray />).toJSON();

describe('DisplayInlineArray snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
