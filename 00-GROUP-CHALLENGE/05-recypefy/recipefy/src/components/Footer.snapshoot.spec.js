import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Footer />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
