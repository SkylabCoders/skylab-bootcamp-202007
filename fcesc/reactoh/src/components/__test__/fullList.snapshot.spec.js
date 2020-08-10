import React from 'react';
import renderer from 'react-test-renderer';
import FullList from './../FullList';
import { BrowserRouter as Router } from 'react-router-dom';

const tree = renderer.create(<Router><FullList /></Router>).toJSON();

describe('FullList snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
