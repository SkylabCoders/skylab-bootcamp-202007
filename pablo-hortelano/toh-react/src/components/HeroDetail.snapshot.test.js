import renderer from 'react-test-renderer';
import React from 'react';
import HeroDetail from './HeroDetail';
import { BrowserRouter } from 'react-router-dom';

describe('snapshot header', () => {
	const props = {
		match: {
			params: {
				heroId: 14
			}
		}
	};
	const heroDetailTree = renderer.create(
		<BrowserRouter>
			<HeroDetail {...props} />
		</BrowserRouter>
	);

	it('Should match', () => {
		expect(heroDetailTree.toJSON()).toMatchSnapshot();
	});
});
