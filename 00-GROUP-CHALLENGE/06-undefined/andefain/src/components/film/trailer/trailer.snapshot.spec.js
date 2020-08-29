import renderer from 'react-test-renderer';
import React from 'react';
import FilmTrailer from './trailer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Film trailer snapshot', () => {
	const props = {
		image:
			'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6791_AL_.jpg',
		trailer: {
			thumbnailUrl:
				'https://m.media-amazon.com/images/M/MV5BNTdlZGFmMDQtM2RiYi00NzUxLThhZWQtN2M4ZmYwMzllZGYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
		}
	};

	const trailerTree = renderer.create(
		<Router>
			<FilmTrailer trailer={props} />
		</Router>
	);
	it('Should match', () => {
		expect(trailerTree.toJSON()).toMatchSnapshot();
	});
});
