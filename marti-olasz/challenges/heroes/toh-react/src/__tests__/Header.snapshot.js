import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Header />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
