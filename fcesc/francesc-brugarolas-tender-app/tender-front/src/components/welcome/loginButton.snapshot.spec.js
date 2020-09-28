import React from 'react';
import renderer from 'react-test-renderer';
import LoginButton from './LoginButton';

const tree = renderer.create(<LoginButton />).toJSON();

describe('LoginButton component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})