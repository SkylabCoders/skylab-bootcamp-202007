import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header snapshot', () => {
	const headerTree = renderer.create(
		<Router>
			<Header />
		</Router>
	);

	it('should match', () => {
		expect(headerTree.toJSON()).toMatchSnapshot();
	});
});
