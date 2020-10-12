import React from 'react';
import renderer from 'react-test-renderer';
import ProjectBudgetTab from './ProjectBudgetTab';

const tree = renderer.create(<ProjectBudgetTab />).toJSON();

describe('ProjectBudgetTab component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})