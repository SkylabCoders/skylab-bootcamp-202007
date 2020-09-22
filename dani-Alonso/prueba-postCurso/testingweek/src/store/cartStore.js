import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _cartItems = [];

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

	getItems() {
		return _cartItems;
	}

	getprodsById(id) {
		return _cartItems.find((prods) => prods.id === id);
	}
}

const cartStore = new cartStore();
dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			_cartItems = [..._cartItems, action.data];
			cartStore.emitChange();
			break;
		default:
			break;
	}
});

export default cartStore;
