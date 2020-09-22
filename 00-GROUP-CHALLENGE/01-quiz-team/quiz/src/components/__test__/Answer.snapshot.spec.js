import React from 'react';
import renderer from 'react-test-renderer';
import Answer from './../Answer';

const tree = renderer.create(<Answer />).toJSON();

describe('Answer snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
