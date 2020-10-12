import React from 'react';
import renderer from 'react-test-renderer';
import ProjectBudgetBoard from './ProjectBudgetBoard';

const tree = renderer.create(<ProjectBudgetBoard />).toJSON();

describe('ProjectBudgetBoard component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})