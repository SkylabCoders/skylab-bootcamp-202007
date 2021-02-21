import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import products from '../products';

export function loadProducts() {
	return new Promise((resolve, reject) => {
		resolve(products);
	}).then((productList) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PRODUCTS,
			data: productList
		});
	});
}
