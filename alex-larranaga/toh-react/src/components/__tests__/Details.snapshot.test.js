import renderer from 'react-test-renderer';
import React from 'react';
import HeroDetail from '../HeroDetail';
import { BrowserRouter } from 'react-router-dom';

describe('App snapshot', () => {
	const props = {
		match: {
			params: {
				heroId: 14
			}
		}
	};
	const tree = renderer.create(
		<BrowserRouter>
			<HeroDetail {...props} />
		</BrowserRouter>
	);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
