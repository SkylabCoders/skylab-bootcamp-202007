import React from 'react';
import renderer from 'react-test-renderer';
import ProjectFlow from './ProjectFlow';

const tree = renderer.create(<ProjectFlow />).toJSON();

describe('ProjectFlow component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})