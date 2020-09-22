import React from 'react';
import renderer from 'react-test-renderer';
import HeroDetail from '../HeroDetail';
import { BrowserRouter } from 'react-router-dom';

describe('HeroDetail snapshot', () => {
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
	it('should match', () => {
		expect(heroDetailTree).toMatchSnapshot();
	});
});
