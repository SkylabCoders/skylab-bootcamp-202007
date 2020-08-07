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
	const key = '67f99dfe9bmshd10528bcbee94a7p1c05acjsna635b838f390';
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
	const key = '51b8d9e5damshc674c1d67bee7bbp142978jsn9784ef1b0b75';
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
	const key = '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777';
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
				'x-rapidapi-key': '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777'
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
				'x-rapidapi-key': '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777'
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
				'x-rapidapi-key': '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777'
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
				'x-rapidapi-key': '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777'
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
				'x-rapidapi-key': '0f971b5c32msh287a8f60f14e044p177b39jsnd90683f23777'
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
