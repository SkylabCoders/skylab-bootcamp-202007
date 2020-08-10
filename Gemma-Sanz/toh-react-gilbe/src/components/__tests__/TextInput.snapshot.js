import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TextInput from '../TextInput';

describe('TextInput snapshot', () => {
    const textInputTree = renderer.create(
        <Router>
            <TextInput />
        </Router>
    );

    it('should match', () => {
        expect(textInputTree.toJSON()).toMatchSnapshot();
    });
});