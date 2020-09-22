import dispatcher from '../dispatcher';
import actionTypes from '../actions/actions-types';
import { EventEmitter } from 'events';

const CHANGE = 'CHANGE';
let _productList = [];

class ProductStore extends EventEmitter {
	escuchaCambios(callback) {
		this.on(CHANGE, callback);
	}
	dejeDeEscucharCambios(callback) {
		this.removeListener(CHANGE, callback);
	}
	emitChange() {
		this.emit(CHANGE);
	}

	getProducts() {
		return _productList;
	}
}

const productStore = new ProductStore();

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
