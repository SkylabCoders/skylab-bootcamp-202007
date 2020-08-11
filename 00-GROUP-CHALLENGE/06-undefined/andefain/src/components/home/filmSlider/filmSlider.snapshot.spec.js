import renderer from 'react-test-renderer';
import React from 'react';
import FilmSlider from './filmSlider';
import { BrowserRouter } from 'react-router-dom';

describe('Film slider snapshot', () => {
	const props = [
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt7556122/',
			image: {
				height: 1000,
				id: '/title/tt7556122/images/rm1029679361',
				url:
					'https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
				width: 675
			},
			title: 'The Old Guard',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt6048922/',
			image: {
				height: 1010,
				id: '/title/tt6048922/images/rm3673926145',
				url:
					'https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
				width: 675
			},
			title: 'Greyhound',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt11946300/',
			image: {
				height: 1200,
				id: '/title/tt11946300/images/rm3967657985',
				url:
					'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
				width: 900
			},
			title: 'Deep Blue Sea 3',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt6723592/',
			image: {
				height: 4096,
				id: '/title/tt6723592/images/rm710584321',
				url:
					'https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_.jpg',
				width: 2764
			},
			title: 'Tenet',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt10508838/',
			image: {
				height: 1984,
				id: '/title/tt10508838/images/rm4172656129',
				url:
					'https://m.media-amazon.com/images/M/MV5BZmUxMWVhMDEtNTI5ZS00NjNjLWIzY2ItYTFiYThhYWNmYWY3XkEyXkFqcGdeQXVyOTE4ODkzMzA@._V1_.jpg',
				width: 1417
			},
			title: 'Double World',
			titleType: 'movie',
			year: 2020
		}
	];
	const tree = renderer.create(
		<BrowserRouter>
			<FilmSlider data={props} />
		</BrowserRouter>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
