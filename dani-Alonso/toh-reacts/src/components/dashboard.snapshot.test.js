import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import React from 'react';

describe('Dashboard snapshot', () => {
	const tree = renderer.create(<Dashboard />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
