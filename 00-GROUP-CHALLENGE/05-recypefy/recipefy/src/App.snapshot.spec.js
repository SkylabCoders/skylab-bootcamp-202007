import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

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
