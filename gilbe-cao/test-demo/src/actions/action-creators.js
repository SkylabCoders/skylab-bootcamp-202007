import dispatcher from '../dispatcher';
import productMock from '../productMock';
import actionTypes from '../actions/actions-types';

export function loadProducts() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: productMock
	});
}

export function addToCart(product) {
	dispatcher.dispatch({
		type: actionTypes.ADD_TO_CART,
		data: productMock
	});
}
