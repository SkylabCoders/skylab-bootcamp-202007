import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _productList = [];

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
		return _productList;
	}

	getprodsById(id) {
		return _productList.find((prods) => prods.id === id);
	}
}

const productStore = new productStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_PRODUCTS:
			_productList = [...action.data];
			productStore.emitChange();
			break;
		default:
			break;
	}
});

export default productStore;
