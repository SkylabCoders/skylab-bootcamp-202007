import actionTypes from './actionTypes';
import dispatcher from '../dispatcher';
import productMock from '../mock/productsMock';

export function loadProducts() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: productMock
	});
}

/* export function loadCart() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_CART
	});
}
 */
export function addToCart(product) {
	dispatcher.dispatch({
		type: actionTypes.ADD_TO_CART,
		data: product
	});
}

/* export function loadCart() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: products
	});
} */
