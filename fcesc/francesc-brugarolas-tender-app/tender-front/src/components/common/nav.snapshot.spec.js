import React from 'react';
import renderer from 'react-test-renderer';
import Nav from './Nav';

const tree = renderer.create(<Nav />).toJSON();

describe('Nav component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})