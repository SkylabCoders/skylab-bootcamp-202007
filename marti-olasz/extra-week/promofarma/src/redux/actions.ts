import types from './actionTypes';

export function addToCart(id: number) {
	return { type: types.ADD_TO_CART, payload: id };
}

export function removeFromCart(id: number) {
	return { type: types.REMOVE_FROM_CART, payload: id };
}

export function changeProductInCart(id: number) {
	return { type: types.CHANGE_PRODUCT_IN_CART, payload: id };
}
