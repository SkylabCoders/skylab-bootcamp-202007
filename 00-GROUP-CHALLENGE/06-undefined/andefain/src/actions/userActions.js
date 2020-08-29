import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export async function listFavoriteFilms() {
	const data = [];
	dispatcher.dispatch({
		type: actionTypes.LIST_FAVORITE_FILMS,
		data: data
	});
}
