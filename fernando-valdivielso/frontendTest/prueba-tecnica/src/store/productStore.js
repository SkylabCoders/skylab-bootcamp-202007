import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _products = [];
console.log('_products', _products);

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
}

const productStore = new ProductStore();
dispatcher.register((action) => {
	if (actionTypes.LOAD_PRODUCTS) {
		_products = action.data;
		productStore.emitChange(_products);
	} else if (actionTypes.ADD_TO_CART) {
		console.log('carrito');
	}
});

export default productStore;
