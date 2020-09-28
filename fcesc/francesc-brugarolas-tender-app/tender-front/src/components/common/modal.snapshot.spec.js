import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';

const tree = renderer.create(<Modal />).toJSON();

describe('Modal component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})