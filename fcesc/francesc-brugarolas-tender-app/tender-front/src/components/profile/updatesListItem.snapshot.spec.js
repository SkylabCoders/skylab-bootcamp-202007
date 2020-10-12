import React from 'react';
import renderer from 'react-test-renderer';
import UpdatesListItem from './UpdatesListItem';

const tree = renderer.create(<UpdatesListItem />).toJSON();

describe('UpdatesListItem component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})