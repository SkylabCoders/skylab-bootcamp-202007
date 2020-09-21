import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('Dashboard snapshot', () => {
	const tree = renderer.create(<Dashboard />);

	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
