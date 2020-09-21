import actionTypes from './actionTypes';
import dispatcher from '../dispatcher';
import productsData from '../mock/productsData.json';

export function loadProducts() {
	return new Promise((resolve) => {
		resolve(productsData);
	}).then((products) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PRODUCTS,
			data: products
		});
	});
}
