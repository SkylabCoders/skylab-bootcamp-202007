import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const tree = renderer.create(<App />).toJSON();

describe('App component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})