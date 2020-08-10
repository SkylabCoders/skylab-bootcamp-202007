import renderer from 'react-test-renderer';
import React from 'react';
import List from './list';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<List />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
