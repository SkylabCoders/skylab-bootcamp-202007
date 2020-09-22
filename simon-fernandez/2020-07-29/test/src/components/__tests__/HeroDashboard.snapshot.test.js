import renderer from 'react-test-renderer';
import HeroDashboard from '../HeroDashboard';
import React from 'react';

describe('App Snapshot', () => {
	const tree = renderer.create(<HeroDashboard />);

	it('should match snapshot', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
