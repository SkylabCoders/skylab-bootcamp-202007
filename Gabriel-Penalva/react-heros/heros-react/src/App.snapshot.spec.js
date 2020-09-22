import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';
const tree = renderer.create(
    <App />
)

describe('App Snapshot', function () {
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

});