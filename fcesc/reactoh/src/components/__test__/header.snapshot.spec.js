import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../Header';

const tree = renderer.create(<Header />).toJSON();

describe('Header snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
