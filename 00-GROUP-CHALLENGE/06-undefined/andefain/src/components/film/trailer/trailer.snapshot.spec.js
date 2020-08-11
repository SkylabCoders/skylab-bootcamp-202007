import renderer from 'react-test-renderer';
import React from 'react';
import FilmTrailer from './trailer';
//import { BrowserRouter as Router } from 'react-router-dom';

describe('Film trailer snapshot', () => {
	const trailerTree = renderer.create(<FilmTrailer />);
	it('Should match', () => {
		expect(trailerTree.toJSON()).toMatchSnapshot();
	});
});
