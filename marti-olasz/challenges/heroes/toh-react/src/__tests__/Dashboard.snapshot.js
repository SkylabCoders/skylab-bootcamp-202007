import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../components/HeroDashboard';

describe('Dashboard snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Dashboard />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
