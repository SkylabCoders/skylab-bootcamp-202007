import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
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

  getCartItems() {
    return _cartItems;
  }
}

const cartStore = new CartStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let checkProduct = _cartItems.some(product => product === action.data);
      if (!checkProduct) {
        _cartItems = [..._cartItems, action.data];
        console.log(_cartItems);
      } else {
        return false;
      }
      cartStore.emitChange();
      break;
    default:
      break;
  }
});

export default cartStore;
