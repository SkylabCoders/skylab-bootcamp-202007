import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actions-types';

const STORE_CHANGE = 'STORE_CHANGE';
let _cartItems = [];

class CartStore extends EventEmitter {
	getItems() {
		return _cartItems;
	}

	emitChange() {
		this.emit(STORE_CHANGE);
	}

	addListener(callback) {
		this.on(STORE_CHANGE, callback);
	}

	removeMyListener(cb) {
		this.removeListener(STORE_CHANGE, cb);
	}
}

const cartStore = new CartStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			_cartItems = action.data;
			cartStore.emitChange();
			break;

		default:
			break;
	}
});

export default cartStore;
