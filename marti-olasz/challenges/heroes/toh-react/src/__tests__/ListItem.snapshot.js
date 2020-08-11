import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ListItem from '../components/HeroListItem';

describe('ListItems snapshot', () => {
	const tree = renderer.create(
		<Router>
			<ListItem />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
