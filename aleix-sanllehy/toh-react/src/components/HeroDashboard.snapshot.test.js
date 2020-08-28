import renderer from 'react-test-renderer';
import React from 'react';
import HeroDashboard from './HeroDashboard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HeroDashboard snapshot', () => {
	const tree = renderer.create(
		<Router>
			<HeroDashboard />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
