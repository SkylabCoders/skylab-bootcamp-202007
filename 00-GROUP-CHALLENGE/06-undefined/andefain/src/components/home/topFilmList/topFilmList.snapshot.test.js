import renderer from 'react-test-renderer';
import React from 'react';
import TopFilmList from './topFilmList';
import { BrowserRouter } from 'react-router-dom';

describe('Film list snapshot', () => {
	const props = [
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt8110330/',
			image: {
				height: 1417,
				id: '/title/tt8110330/images/rm265726209',
				url:
					'https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
				width: 1134
			},
			title: 'Dil Bechara',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt9784456/',
			image: {
				height: 12600,
				id: '/title/tt9784456/images/rm2660284161',
				url:
					'https://m.media-amazon.com/images/M/MV5BOWQ5ZGU2ZGQtOTJjYi00MWI3LWE1ZDQtM2EzOGI2MzJjNTA4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
				width: 8700
			},
			title: 'The Kissing Booth 2',
			titleType: 'movie',
			year: 2020
		},
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
			id: '/title/tt10362466/',
			image: {
				height: 2048,
				id: '/title/tt10362466/images/rm1503702785',
				url:
					'https://m.media-amazon.com/images/M/MV5BN2UyNGM3MDUtMTIzZi00ZDdkLThlYTktYjk0ZDMzM2JiMjMyXkEyXkFqcGdeQXVyNzE0MjkxMzA@._V1_.jpg',
				width: 1382
			},
			title: 'After We Collided',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt3799232/',
			image: {
				height: 2048,
				id: '/title/tt3799232/images/rm1883393024',
				url:
					'https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg',
				width: 1382
			},
			title: 'The Kissing Booth',
			titleType: 'movie',
			year: 2018
		}
	];
	const tree = renderer.create(
		<BrowserRouter>
			<TopFilmList data={props} />
		</BrowserRouter>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
