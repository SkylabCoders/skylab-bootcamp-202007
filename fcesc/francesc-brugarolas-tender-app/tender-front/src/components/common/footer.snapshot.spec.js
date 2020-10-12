import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

const tree = renderer.create(<Footer />).toJSON();

describe('Footer component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})