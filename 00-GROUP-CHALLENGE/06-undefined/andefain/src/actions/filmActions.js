import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

async function callFilmArray(array, key) {
	const filmArray = await array.map(async (element) => {
		let filmPromise = await fetch(
			`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'imdb8.p.rapidapi.com',
					'x-rapidapi-key': key
				}
			}
		);
		let filmObj = filmPromise.json();
		return filmObj;
	});
	return filmArray;
}

export async function sliderData() {
	const data = [
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
	dispatcher.dispatch({
		type: actionTypes.SLIDER_FILM,
		data: data
	});
}

export async function mostPopularData() {
	const data = [
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
	dispatcher.dispatch({
		type: actionTypes.POPULAR_FILM,
		data: data
	});
}

export async function comingSoonData() {
	const data = [
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt4523530/',
			image: {
				height: 1097,
				id: '/title/tt4523530/images/rm2590615809',
				url:
					'https://m.media-amazon.com/images/M/MV5BYzAwZjM0NDUtZjg5YS00YTg2LWJkNDctOWNlZWU4YzFjOGQwXkEyXkFqcGdeQXVyMDIzMTg5Mw@@._V1_.jpg',
				width: 781
			},
			title: 'Valley of the Gods',
			titleType: 'movie',
			year: 2019
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt11394332/',
			image: {
				height: 1920,
				id: '/title/tt11394332/images/rm739093505',
				url:
					'https://m.media-amazon.com/images/M/MV5BZjFkYjBkMjMtYTZlNy00OGU3LWJlYzEtOWQ5Y2E0ZGRjMzExXkEyXkFqcGdeQXVyMTE4NTU4ODg@._V1_.jpg',
				width: 1080
			},
			title: 'Spree',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt5723282/',
			image: {
				height: 2963,
				id: '/title/tt5723282/images/rm2768414977',
				url:
					'https://m.media-amazon.com/images/M/MV5BOGViZTgwMzYtNWY3My00ZTA5LTk2MDAtM2IwNGNmZjk2OTk0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
				width: 2000
			},
			title: 'Endless',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt5617312/',
			image: {
				height: 640,
				id: '/title/tt5617312/images/rm1690152705',
				url:
					'https://m.media-amazon.com/images/M/MV5BMDcyZTIxOTAtOWQ4ZS00ODVhLTgwN2YtODQwN2QzOGYwZmNkXkEyXkFqcGdeQXVyNjI0NTkwMA@@._V1_.jpg',
				width: 433
			},
			title: 'The Bay of Silence',
			titleType: 'movie',
			year: 2020
		},
		{
			'@type': 'imdb.api.title.base',
			id: '/title/tt10059518/',
			image: {
				height: 2871,
				id: '/title/tt10059518/images/rm3051465729',
				url:
					'https://m.media-amazon.com/images/M/MV5BYjc1Mjg5NjItY2I2MS00NDk3LWI5NGYtNzZjNTNiZmMwZTA3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
				width: 1938
			},
			title: 'Unhinged',
			titleType: 'movie',
			year: 2020
		}
	];
	dispatcher.dispatch({
		type: actionTypes.COMING_SOON_FILM,
		data: data
	});
}

export async function callFilm() {
	let result = [
		{
			'@type': 'imdb.api.title.title',
			id: '/title/tt11946300/',
			image: {
				height: 1200,
				id: '/title/tt11946300/images/rm3967657985',
				url:
					'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
				width: 900
			},
			runningTimeInMinutes: 99,
			title: 'Deep Blue Sea 3',
			titleType: 'movie',
			year: 2020
		},
		{
			id: '/title/tt11946300/',
			base: {
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
			plots: [
				{
					author: 'Nick Riganas',
					id: '/title/tt11946300/plot/po5243983',
					text:
						'Studying the effects of climate change off the coast of Mozambique, a marine biologist and her team confront three genetically enhanced bull sharks. Now, a new bloodbath is waiting to happen in the name of science. Will humans never learn?'
				},
				{
					id: '/title/tt11946300/plot/ps5024381',
					text:
						'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a "scientific" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren\'t just any bull sharks.'
				},
				{
					author: 'Nick Riganas',
					id: '/title/tt11946300/plot/ps5243984',
					text:
						'Off the coast of Mozambique, somewhere in the middle of the vast Indian Ocean, the rapidly sinking artificial islet known as "Little Happy", and its last two residents are facing the effects of global warming. There, the passionate marine biologist, Dr Emma Collins, and her team are studying the impact of climate change on Great White sharks, who come to mate in the peaceful marine conservatory, when, unexpectedly, Emma\'s old flame, Richard Lowell, arrives on a research vessel. Now, in high hopes of capturing three rogue, genetically enhanced bull sharks, Richard drags Dr Collins in a fierce battle of survival, as the trio of fast underwater killers have already picked up the fragrant scent of human blood in the water. In the wake of the Akhelios Complex massacre in Deep Blue Sea 2 (2018), a new bloodbath is waiting to happen, of course, in the name of science. Will humans never learn?'
				}
			]
		},
		['Action', 'Horror', 'Sci-Fi'],
		{
			'@meta': {
				operation: 'TitleVideosV2',
				requestId: '5139479e-5865-4c9d-ba75-997b57b7182a',
				serviceTimeMs: 7.502832
			},
			resource: {
				'@type': 'imdb.api.title.v2.videos',
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
				year: 2020,
				size: 1,
				videoCounts: [
					{
						contentType: 'Trailer',
						count: 1
					}
				],
				videos: [
					{
						audioLanguage: 'en',
						contentType: 'Trailer',
						description:
							'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a "scientific" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren\'t just any bull sharks.',
						durationInSeconds: 114,
						id: '/videoV2/vi889306649',
						image: {
							height: 1080,
							url:
								'https://m.media-amazon.com/images/M/MV5BMzRhMTM2MTgtYTU4MS00ZWQ4LWE1NDctOTg2OTliOWJjYzM0XkEyXkFqcGdeQXN3aWZ0dw@@._V1_.jpg',
							width: 1920
						},
						primaryTitle: {
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
						title: 'Official Trailer'
					}
				]
			}
		},
		{
			d: [
				{
					i: {
						height: 1200,
						imageUrl:
							'https://m.media-amazon.com/images/M/MV5BNTI1YmU4NmItZTc4NC00NzA2LWJiMjYtMmE0Njg5M2U2N2VhXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg',
						width: 900
					},
					id: 'tt11946300',
					l: 'Deep Blue Sea 3',
					q: 'feature',
					s: 'Tania Raymonde, Nathaniel Buzolic',
					y: 2020
				}
			],
			q: 'tt11946300',
			v: 1
		}
	];
	dispatcher.dispatch({
		type: actionTypes.FILM_DETAILS,
		data: result
	});
}
