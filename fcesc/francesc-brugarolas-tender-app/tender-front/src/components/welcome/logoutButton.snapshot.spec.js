import React from 'react';
import renderer from 'react-test-renderer';
import LogoutButton from './LogoutButton';

const tree = renderer.create(<LogoutButton />).toJSON();

describe('LogoutButton component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})