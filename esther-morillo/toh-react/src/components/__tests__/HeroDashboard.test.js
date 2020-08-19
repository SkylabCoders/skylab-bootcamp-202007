import renderer from 'react-test-renderer';
import React from 'react'
import HeroDashboard from '../HeroDashboard';


describe('Dashboard snapshot', () => {
    const tree = renderer.create(<HeroDashboard />);

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
})