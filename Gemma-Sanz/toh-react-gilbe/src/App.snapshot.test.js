import renderer from 'react-test-renderer';
import App from './App';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
    const appTree = renderer.create(<Router><App /></Router>);

    it('should match', () => {
        expect(appTree.toJSON()).toMatchSnapshot();
    });
});


