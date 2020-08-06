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
	const key = '1daf9227damsh148ae3c6e67b59cp19105ejsn53386eedfa1d'; //Olasz
	const idPromise = await fetch(
		'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%252Fchart%252Fpopular%252Fgenre%252Fadventure',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': key
			}
		}
	);
	const idArray = await idPromise.json();
	const idArraySlice = idArray
		.slice(0, 5)
		.map((element) => element.split('/')[2]);
	const result = await callFilmArray(idArraySlice, key);
	Promise.all(result).then((resolve) => {
		dispatcher.dispatch({
			type: actionTypes.SLIDER_FILM,
			data: resolve
		});
	});
	return result;
}

export async function mostPopularData() {
	const key = 'fad4d85ea9mshfb3b4b1043cf257p1860a2jsnbb3a4625e340'; //Vanesa
	const idPromise = await fetch(
		'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?purchaseCountry=US&homeCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': key
			}
		}
	);
	const idArray = await idPromise.json();
	const idArraySlice = idArray
		.slice(0, 5)
		.map((element) => element.split('/')[2]);
	const result = await callFilmArray(idArraySlice, key);
	Promise.all(result).then((resolve) => {
		dispatcher.dispatch({
			type: actionTypes.POPULAR_FILM,
			data: resolve
		});
	});
	return result;
}

export async function comingSoonData() {
	const key = '6a52826a3fmsh59822a609a85992p14bb9fjsn6ce08971f6aa'; //Jorge
	const idPromise = await fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': key
			}
		}
	);
	const idArray = await idPromise.json();
	const idArraySlice = idArray
		.slice(0, 5)
		.map((element) => element.split('/')[2]);
	const result = await callFilmArray(idArraySlice, key);
	Promise.all(result).then((resolve) => {
		dispatcher.dispatch({
			type: actionTypes.COMING_SOON_FILM,
			data: resolve
		});
	});
	return result;
}

export function addFav(filmName) {
	return new Promise((resolve) => {
		resolve(filmName);
	}).then((response) => {
		dispatcher.dispatch({
			type: actionTypes.ADD_FAV,
			data: response
		});
	});
}

export async function callFilm() {
	let result = [];
	let id = window.location.pathname.split('/')[2];
	const detailsPromise = await fetch(
		`https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'fad4d85ea9mshfb3b4b1043cf257p1860a2jsnbb3a4625e340'
			}
		}
	);
	result[0] = await detailsPromise.json();

	const plotPromise = await fetch(
		`https://imdb8.p.rapidapi.com/title/get-plots?tconst=${id}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'fad4d85ea9mshfb3b4b1043cf257p1860a2jsnbb3a4625e340'
			}
		}
	);
	result[1] = await plotPromise.json();

	const genresPromise = await fetch(
		`https://imdb8.p.rapidapi.com/title/get-genres?tconst=${id}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'fad4d85ea9mshfb3b4b1043cf257p1860a2jsnbb3a4625e340'
			}
		}
	);
	result[2] = await genresPromise.json();

	const videoPromise = await fetch(
		`https://imdb8.p.rapidapi.com/title/get-videos?limit=25&region=US&tconst=${id}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': 'fad4d85ea9mshfb3b4b1043cf257p1860a2jsnbb3a4625e340'
			}
		}
	);
	result[3] = await videoPromise.json();

	const actorsPromise = await fetch(
		`https://imdb8.p.rapidapi.com/title/auto-complete?q=${id}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '6a3ab48c9fmsh9bd19938f44ca6dp1c9e06jsn1c9d2f122e27'
			}
		}
	);
	result[4] = await actorsPromise.json();

	Promise.all(result).then((result) => {
		dispatcher.dispatch({
			type: actionTypes.FILM_DETAILS,
			data: result
		});
	});
}
