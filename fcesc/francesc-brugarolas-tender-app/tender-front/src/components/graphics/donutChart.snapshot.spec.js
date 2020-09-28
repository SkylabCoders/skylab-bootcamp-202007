import React from 'react';
import renderer from 'react-test-renderer';
import DonutChart from './DonutChart';

const tree = renderer.create(<DonutChart />).toJSON();

describe('DonutChart component snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})