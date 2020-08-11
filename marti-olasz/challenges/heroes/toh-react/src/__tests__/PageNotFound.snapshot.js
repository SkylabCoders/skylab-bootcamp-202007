import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

describe('PageNotFounds snapshot', () => {
	const tree = renderer.create(
		<Router>
			<PageNotFound />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
