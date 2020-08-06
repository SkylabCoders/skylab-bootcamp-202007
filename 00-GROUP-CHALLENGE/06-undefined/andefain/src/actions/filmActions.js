import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

async function callFilmArray(array) {
	const filmArray = await array.map(async (element) => {
		let filmPromise = await fetch(
			`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'imdb8.p.rapidapi.com',
					'x-rapidapi-key': '7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
				}
			}
		);
		let filmObj = filmPromise.json();
		return filmObj;
	});
	return filmArray;
}

export async function sliderData() {
	const idPromise = await fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows?currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
			}
		}
	);
	const idArray = await idPromise.json();
	const idArraySlice = idArray
		.slice(0, 5)
		.map((element) => element.split('/')[2]);
	const result = await callFilmArray(idArraySlice);
	dispatcher.dispatch({
		type: actionTypes.SLIDER_FILM,
		data: result
	});
	return result;
}

export function mostPopularData() {
	let id;
	return fetch(
		'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?purchaseCountry=US&homeCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			id = response.slice(0, 4).map((element) => element.split('/')[2]);
			const arrayFilm = [];

			id.map((element) => {
				fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'imdb8.p.rapidapi.com',
						'x-rapidapi-key':
							'7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
					}
				})
					.then((response) => response.json())
					.then((response) => {
						arrayFilm.push(response);
						if (arrayFilm.length === id.length)
							dispatcher.dispatch({
								type: actionTypes.POPULAR_FILM,
								data: arrayFilm
							});
					})
					.catch((err) => {
						console.log(err);
					});
			});
		});
}

export function comingSoonData() {
	let id;
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			id = response.slice(0, 4).map((element) => element.split('/')[2]);
			const arrayFilm = [];
			id.map((element) => {
				fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'imdb8.p.rapidapi.com',
						'x-rapidapi-key':
							'7fb49a9af7mshdf5e47651f6a79ap1a213djsnc6000e36334a'
					}
				})
					.then((response) => response.json())
					.then((response) => {
						arrayFilm.push(response);
						if (arrayFilm.length === id.length)
							dispatcher.dispatch({
								type: actionTypes.COMING_SOON_FILM,
								data: arrayFilm
							});
					})
					.catch((err) => {
						console.log(err);
					});
			});
		})
		.catch((err) => console.log(err));
}
