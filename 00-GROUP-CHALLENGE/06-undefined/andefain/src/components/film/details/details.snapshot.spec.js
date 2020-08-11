import renderer from 'react-test-renderer';
import React from 'react';
import FilmDetails from './details';
//import { BrowserRouter as Router } from 'react-router-dom';

describe('Film details snapshot', () => {
	const detailsTree = renderer.create(<FilmDetails />);
	it('Should match', () => {
		expect(detailsTree.toJSON()).toMatchSnapshot();
	});
});
