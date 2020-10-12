import React from 'react';
import renderer from 'react-test-renderer';
import PortfolioProjectItem from './PortfolioProjectItem';

const tree = renderer.create(<PortfolioProjectItem />).toJSON();

describe('PortfolioProjectItem component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})