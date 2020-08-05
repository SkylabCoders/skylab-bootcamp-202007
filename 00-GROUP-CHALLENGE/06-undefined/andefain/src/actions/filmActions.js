import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function sliderData() {
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows?currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '4901ceb585msh6d2329b8180aec8p1c273bjsnad62098b1210'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			dispatcher.dispatch({
				type: actionTypes.SLIDER_FILM,
				data: response.slice(0, 10).map((element) => element.split('/')[2])
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

export function mostPopularData() {
	let id;
	fetch(
		'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?purchaseCountry=US&homeCountry=US&currentCountry=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': '4901ceb585msh6d2329b8180aec8p1c273bjsnad62098b1210'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			id = response.slice(0, 5).map((element) => element.split('/')[2]);
			const arrayFilm = [];

			id.map((element) => {
				fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'imdb8.p.rapidapi.com',
						'x-rapidapi-key':
							'4901ceb585msh6d2329b8180aec8p1c273bjsnad62098b1210'
					}
				})
					.then((response) => response.json())
					.then((response) => {
						arrayFilm.push(response);
						if (arrayFilm.length === 5)
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
				'x-rapidapi-key': '4901ceb585msh6d2329b8180aec8p1c273bjsnad62098b1210'
			}
		}
	)
		.then((response) => response.json())
		.then((response) => {
			id = response.slice(0, 5).map((element) => element.split('/')[2]);
			const arrayFilm = [];

			id.map((element) => {
				fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${element}`, {
					method: 'GET',
					headers: {
						'x-rapidapi-host': 'imdb8.p.rapidapi.com',
						'x-rapidapi-key':
							'4901ceb585msh6d2329b8180aec8p1c273bjsnad62098b1210'
					}
				})
					.then((response) => response.json())
					.then((response) => {
						arrayFilm.push(response);
						if (arrayFilm.length === 5)
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
