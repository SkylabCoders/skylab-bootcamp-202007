import renderer from 'react-test-renderer';
import React from 'react';
import HeroesPage from './HeroesPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HeroesPage snapshot', () => {
	const tree = renderer.create(
		<Router>
			<HeroesPage />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
