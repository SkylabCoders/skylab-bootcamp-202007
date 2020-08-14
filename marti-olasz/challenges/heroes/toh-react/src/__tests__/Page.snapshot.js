import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from '../components/HeroesPage';

describe('Pages snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Page />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
