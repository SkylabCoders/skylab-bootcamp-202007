import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

const tree = renderer.create(<Profile />).toJSON();

describe('Profile component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})