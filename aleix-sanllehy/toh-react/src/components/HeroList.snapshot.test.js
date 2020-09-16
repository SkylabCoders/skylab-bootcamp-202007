import renderer from 'react-test-renderer';
import React from 'react';
import HeroList from './HeroList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HeroList snapshot', () => {
	const tree = renderer.create(
		<Router>
			<HeroList />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
