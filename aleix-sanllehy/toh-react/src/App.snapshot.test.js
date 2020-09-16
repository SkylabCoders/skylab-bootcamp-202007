import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<App />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
