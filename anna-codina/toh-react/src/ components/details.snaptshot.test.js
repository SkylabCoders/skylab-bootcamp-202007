import renderer from 'react-test-renderer';
import React from 'react';
import Details from './details';
import { BrowserRouter as Router } from 'react-router-dom';

xdescribe('App snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Details />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
