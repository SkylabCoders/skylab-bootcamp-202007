const sliderMock = [
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

const popularMock = [
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

const comingMock = [
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

export { sliderMock, popularMock, comingMock };
