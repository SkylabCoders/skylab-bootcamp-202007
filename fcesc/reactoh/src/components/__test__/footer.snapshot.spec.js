import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './../Footer';

const tree = renderer.create(<Footer />).toJSON();

describe('Footer snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
