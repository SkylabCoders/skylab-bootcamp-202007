import React from 'react';
import renderer from 'react-test-renderer';
import PortfolioFlow from './PortfolioFlow';

const tree = renderer.create(<PortfolioFlow />).toJSON();

describe('PortfolioFlow component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})