import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from '../components/HeroDetail';

describe('Details snapshot', () => {
	const props = {
		match: {
			params: {
				heroId: 12
			}
		}
	};
	const tree = renderer.create(
		<Router>
			<Detail {...props} />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
