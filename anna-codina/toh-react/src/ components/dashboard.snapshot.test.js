import renderer from 'react-test-renderer';
import React from 'react';
import Dashboard from './dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Dashboard />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
