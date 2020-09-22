import productMock from '../productMock';
import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

export function loadProducts() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: productMock
	});
}
export function loadCart() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_CART
	});
}
export function addToCart(product) {
	dispatcher.dispatch({
		type: actionTypes.ADD_TO_CART,
		data: product
	});
}
