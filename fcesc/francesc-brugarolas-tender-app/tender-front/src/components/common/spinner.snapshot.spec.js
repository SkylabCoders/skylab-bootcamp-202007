import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './Spinner';

const tree = renderer.create(<Spinner />).toJSON();

describe('Spinner component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})