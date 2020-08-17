import renderer from 'react-test-renderer';
import Header from '../Header';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Header />
		</Router>
	);

	it('should match snapshot', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
