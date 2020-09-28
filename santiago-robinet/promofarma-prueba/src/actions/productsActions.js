import dispatcher from '../dispatcher.';
import actionTypes from './actionTypes';
import productsList from '../productsList';

export function loadProductsList() {
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: productsList
	});
}

export function addToCart(product) {
	dispatcher.dispatch({
		type: actionTypes.ADD_TO_CART,
		data: product
	});
}

export function checkInCart(product){
    dispatcher.dispatch({
        type: actionTypes.IN_CART,
        data: product
    })
}
