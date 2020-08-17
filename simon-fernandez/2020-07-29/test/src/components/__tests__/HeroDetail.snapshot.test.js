import renderer from 'react-test-renderer';
import HeroDetail from '../HeroDetail';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Snapshot', () => {
	const props = {
		match: {
			params: {
				heroId: 14
			}
		}
	};
	const tree = renderer.create(
		<Router>
			<HeroDetail {...props} />
		</Router>
	);

	it('should match snapshot', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
