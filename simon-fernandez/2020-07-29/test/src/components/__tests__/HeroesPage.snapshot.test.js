import renderer from 'react-test-renderer';
import HeroesPage from '../HeroesPage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Snapshot', () => {
	const tree = renderer.create(
		<Router>
			<HeroesPage />
		</Router>
	);

	it('should match snapshot', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
