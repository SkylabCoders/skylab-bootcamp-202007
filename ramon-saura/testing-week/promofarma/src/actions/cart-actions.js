import dispatcher from '../dispatcher';
import actionTypes from './action-types';

export function loadCart() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_CART
	});
}

export function addCart(product) {
	dispatcher.dispatch({
		type: actionTypes.LOAD_CART,
		data: product
	});
}
