import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './Welcome';

const tree = renderer.create(<Welcome />).toJSON();

describe('Welcome component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})