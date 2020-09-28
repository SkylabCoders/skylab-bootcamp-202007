import React from 'react';
import renderer from 'react-test-renderer';
import ProjectInfo from './ProjectInfo';

const tree = renderer.create(<ProjectInfo />).toJSON();

describe('ProjectInfo component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})