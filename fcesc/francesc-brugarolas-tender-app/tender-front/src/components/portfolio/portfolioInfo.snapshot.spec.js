import React from 'react';
import renderer from 'react-test-renderer';
import PortfolioInfo from './PortfolioInfo';

const tree = renderer.create(<PortfolioInfo />).toJSON();

describe('PortfolioInfo component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})