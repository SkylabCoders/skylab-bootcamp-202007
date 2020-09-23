import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE_EVENT = 'change';

let _cart = [];

class CartStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	getCart() {
		return _cart;
	}
}

const cartStore = new CartStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_CART:
			_cart = [..._cart, action.data];
			cartStore.emitChange();
			break;
		default:
			break;
	}
});

export default cartStore;
