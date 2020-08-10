import React from 'react';
import renderer from 'react-test-renderer';
import FullList from './../FullList';

const tree = renderer.create(<FullList />).toJSON();

describe('FullList snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
