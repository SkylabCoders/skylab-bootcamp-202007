import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from '../components/HeroDetail';

xdescribe('Details snapshot', () => {
	const tree = renderer.create(
		<Router>
			<Detail />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
