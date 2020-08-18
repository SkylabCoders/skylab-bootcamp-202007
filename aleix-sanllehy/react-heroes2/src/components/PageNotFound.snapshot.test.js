import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('Header snapshot', () => {
	const tree = renderer.create(
		<Router>
			<PageNotFound />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
