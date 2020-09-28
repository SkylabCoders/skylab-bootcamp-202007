import React from 'react';
import renderer from 'react-test-renderer';
import PageNotAuthorised from './PageNotAuthorised';

const tree = renderer.create(<PageNotAuthorised />).toJSON();

describe('PageNotAuthorised component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})