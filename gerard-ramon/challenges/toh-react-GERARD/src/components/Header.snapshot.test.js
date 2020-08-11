import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('header snapshot', () => {
	it('Should match', () => {
		const tree = renderer.create(
			<Router>
				<Header />
			</Router>
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
