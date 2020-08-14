import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from './../PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';

const tree = renderer.create(<Router><PageNotFound /></Router>).toJSON();

describe('PageNotFound snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
