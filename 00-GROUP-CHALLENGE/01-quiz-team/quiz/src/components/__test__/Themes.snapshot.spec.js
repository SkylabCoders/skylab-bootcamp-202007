import React from 'react';
import renderer from 'react-test-renderer';
import Themes from './../Themes';

const tree = renderer.create(<Themes />).toJSON();

describe('Themes snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})