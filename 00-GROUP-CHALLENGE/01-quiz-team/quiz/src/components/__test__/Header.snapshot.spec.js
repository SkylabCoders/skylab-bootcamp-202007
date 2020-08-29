import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../Header';
import { BrowserRouter as Router } from 'react-router-dom';

const tree = renderer.create(<Router><Header /></Router>).toJSON();

describe('Header snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})