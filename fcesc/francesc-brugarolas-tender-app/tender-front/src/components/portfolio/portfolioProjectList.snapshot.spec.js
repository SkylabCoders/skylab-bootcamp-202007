import React from 'react';
import renderer from 'react-test-renderer';
import PortfolioProjectList from './PortfolioProjectList';

const tree = renderer.create(<PortfolioProjectList />).toJSON();

describe('PortfolioProjectList component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})