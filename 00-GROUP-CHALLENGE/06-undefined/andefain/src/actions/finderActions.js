import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function finderSearch() {
	const data = {
		d: [
			{
				i: {
					height: 3156,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
					width: 2100
				},
				id: 'tt0133093',
				l: 'The Matrix',
				q: 'feature',
				rank: 340,
				s: 'Keanu Reeves, Laurence Fishburne',
				v: [
					{
						i: {
							height: 1066,
							imageUrl:
								'https://m.media-amazon.com/images/M/MV5BNDQ4NTRmN2ItYjgzMS00MzY3LWEwNmYtYmE2ODllZDdhNGI1XkEyXkFqcGdeQXdvbmtpbQ@@._V1_.jpg',
							width: 2048
						},
						id: 'vi1032782617',
						l: 'Theatrical Trailer',
						s: '2:26'
					},
					{
						i: {
							height: 1080,
							imageUrl:
								'https://m.media-amazon.com/images/M/MV5BMjBlMTRjODMtMDMyYi00OGQ1LWJhNzYtYTYyMTcxOWI5MGM0XkEyXkFqcGdeQW1yb2Njbw@@._V1_.jpg',
							width: 1920
						},
						id: 'vi117227033',
						l: 'Movie Scavenger Hunt: Can You Find These MCU Easter Eggs?',
						s: '3:45'
					},
					{
						i: {
							height: 200,
							imageUrl:
								'https://m.media-amazon.com/images/M/MV5BNTExYmY4Y2EtY2E4ZC00MWYwLWFjYmUtMzg5MzdhMmZlYWIxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
							width: 250
						},
						id: 'vi3203793177',
						l: 'Trailer',
						s: '0:32'
					}
				],
				vt: 15,
				y: 1999
			},
			{
				i: {
					height: 757,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BN2I5NzlmMWYtYjIwYy00Y2ZiLWI0ODgtYjAxNDZiZGJlMjlhXkEyXkFqcGdeQXVyMzk1MDQ2MQ@@._V1_.jpg',
					width: 1136
				},
				id: 'tt10838180',
				l: 'The Matrix 4',
				q: 'feature',
				rank: 542,
				s: 'Jonathan Groff, Keanu Reeves',
				v: [
					{
						i: {
							height: 1080,
							imageUrl:
								'https://m.media-amazon.com/images/M/MV5BYTA5M2UyYjMtNWIxNy00OGQ0LTg2MWQtNzUzYTZlMTNiNGFmXkEyXkFqcGdeQWxpenpp._V1_.jpg',
							width: 1919
						},
						id: 'vi2412625689',
						l: "What We Know About 'The Matrix 4' ... So Far",
						s: '3:49'
					}
				],
				vt: 1,
				y: 2022
			},
			{
				i: {
					height: 1200,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
					width: 800
				},
				id: 'tt0234215',
				l: 'The Matrix Reloaded',
				q: 'feature',
				rank: 1655,
				s: 'Keanu Reeves, Laurence Fishburne',
				y: 2003
			},
			{
				i: {
					height: 3251,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
					width: 2200
				},
				id: 'tt0242653',
				l: 'The Matrix Revolutions',
				q: 'feature',
				rank: 2563,
				s: 'Keanu Reeves, Laurence Fishburne',
				y: 2003
			},
			{
				i: {
					height: 1600,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BNjQyNWZiM2UtOWYyYS00MmVmLWFhZGUtY2ExMDQxNDc5YTE0XkEyXkFqcGdeQXVyMTEzMjQzMDM1._V1_.jpg',
					width: 1200
				},
				id: 'tt11749868',
				l: 'Matrix',
				q: 'feature',
				rank: 28196,
				s: 'Chris Harvey',
				y: 2020
			},
			{
				i: {
					height: 708,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_.jpg',
					width: 500
				},
				id: 'tt0106062',
				l: 'Matrix',
				q: 'TV series',
				rank: 38148,
				s: 'Nick Mancuso, Phillip Jarrett',
				y: 1993,
				yr: '1993-'
			},
			{
				i: {
					height: 475,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_.jpg',
					width: 348
				},
				id: 'tt0295432',
				l: 'The Matrix Revisited',
				q: 'video',
				rank: 38669,
				s: 'Lorenzo di Bonaventura, Joel Silver',
				y: 2001
			},
			{
				i: {
					height: 1200,
					imageUrl:
						'https://m.media-amazon.com/images/M/MV5BMjQ0MDUyMDY1N15BMl5BanBnXkFtZTgwNjI1NDI0OTE@._V1_.jpg',
					width: 1349
				},
				id: 'nm2584122',
				l: 'Eddie Mariano',
				rank: 53983,
				s: 'Producer, Triangle Blvd. (2007)'
			}
		],
		q: 'matrix',
		v: 1
	};
	dispatcher.dispatch({
		type: actionTypes.SEARCH_FINDER,
		data: data
	});
}
