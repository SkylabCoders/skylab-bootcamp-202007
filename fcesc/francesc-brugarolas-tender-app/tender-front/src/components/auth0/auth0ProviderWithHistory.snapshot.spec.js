import React from 'react';
import renderer from 'react-test-renderer';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

const tree = renderer.create(<Auth0ProviderWithHistory />).toJSON();

describe('Auth0ProviderWithHistory component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})