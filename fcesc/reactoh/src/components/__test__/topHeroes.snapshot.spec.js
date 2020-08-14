import React from 'react';
import renderer from 'react-test-renderer';
import TopHeroes from './../TopHeroes';
import { BrowserRouter as Router } from 'react-router-dom';

const tree = renderer.create(<Router><TopHeroes /></Router>).toJSON();

describe('TopHeroes snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
