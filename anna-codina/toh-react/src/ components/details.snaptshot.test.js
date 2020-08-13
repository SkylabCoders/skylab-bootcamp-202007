import renderer from 'react-test-renderer';
import React from 'react';
import Details from './details';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App snapshot', () => {
	const props = {
		match: {
			params: {
				heroId: 14
			}
		}
	};
	const tree = renderer.create(
		<Router>
			<Details {...props} />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
