import renderer from 'react-test-renderer';
import React from 'react';
import Header from './header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Header />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
