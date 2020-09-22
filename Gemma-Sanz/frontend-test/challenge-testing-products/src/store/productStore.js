import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';

import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _cart = [];
let _products = [];

class ProductStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getProducts() {
		return _products;
	}
	getCart() {
		console.log('cart Store....', _cart);
		return _cart;
	}
	addProductToCart(id) {
		let check = _cart.some((product) => product.id === id);
		if (!check) {
			let product = _products.find((product) => product.id === id);
			_cart = [..._cart, product];
		}
		console.log('cart modified....', _cart);
	}
}

const productStore = new ProductStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCTS:
			_products = action.data;
			productStore.emitChange();
			break;

		case actionTypes.ADD_TO_CART:
			// _cart = action.data;
			_cart = [..._cart, action.data];
			productStore.emitChange();
			break;
		default:
			break;
	}
});

export default productStore;
