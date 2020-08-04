import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import receteListMoked from '../Recipe.mok';

export function loadRecipe() {
	return new Promise((resolve) => {
		resolve(receteListMoked);
	}).then((recipeList) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_RECIPE,
			data: recipeList
		});
	});
}

export function updateRecipe() {
	return new Promise((resolve) => {
		resolve(/*TO DO*/);
	}).then((/*TO DO*/) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_RECIPE,
			data: null /*TO DO*/
		});
	});
}
