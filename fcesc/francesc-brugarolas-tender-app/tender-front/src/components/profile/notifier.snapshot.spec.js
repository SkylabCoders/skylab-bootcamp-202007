import React from 'react';
import renderer from 'react-test-renderer';
import Notifier from './Notifier';

const tree = renderer.create(<Notifier />).toJSON();

describe('Notifier component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})