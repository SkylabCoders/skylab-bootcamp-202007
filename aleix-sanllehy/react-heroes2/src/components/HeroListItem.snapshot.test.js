import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroListItem from './HeroListItem';

describe('HeroListItem snapshot', () => {
	const tree = renderer.create(
		<Router>
			<HeroListItem />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
