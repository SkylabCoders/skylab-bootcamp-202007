import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import List from '../components/HeroList';

describe('Lists snapshot', () => {
	const tree = renderer.create(
		<Router>
			<List />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
