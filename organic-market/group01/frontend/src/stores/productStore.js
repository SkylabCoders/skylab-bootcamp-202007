import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';
import productList from '../product.mock';

const CHANGE_EVENT = 'change';
let _product = [];

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

	getProduct() {
		return _product;
	}

	getProductById(id) {
		return productList.find((element) => element.id === id.id);
	}
}

const productStore = new ProductStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCTS:
			_product = action.data;
			productStore.emitChange(_product);
			break;
		default:
			break;
	}
});

export default productStore;
