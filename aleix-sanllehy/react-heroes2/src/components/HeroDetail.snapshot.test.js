import renderer from 'react-test-renderer';
import React from 'react';
import HeroDetail from './HeroDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HeroDetail snapshot', () => {
	const props = {
		match: { params: { heroId: 14 } }
	};

	const HeroDetailtree = renderer.create(
		<Router>
			<HeroDetail {...props} />
		</Router>
	);

	it('should match', () => {
		expect(HeroDetailtree.toJSON()).toMatchSnapshot();
	});
});
