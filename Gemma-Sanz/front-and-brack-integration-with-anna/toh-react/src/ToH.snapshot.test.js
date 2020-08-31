import renderer from 'react-test-renderer';
import React from 'react';
import ToH from './ToH';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<ToH />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
