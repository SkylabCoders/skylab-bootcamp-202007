import { EventEmitter } from "events";
import dispatcher from "../dispatcher.";
import actionTypes from "../actions/actionTypes";

const CHANGE = "change";
let _cartItems = [];

class CartStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  getItems() {
    return _cartItems;
  }
}

const cartStore = new CartStore();

dispatcher.register((action) => {
    switch(action.type){

        case actionTypes.ADD_TO_CART:
            action.data.inCart = true;
            _cartItems = [..._cartItems, action.data]
            cartStore.emitChange();
            break;

        default:
            break;
    }
});

export default cartStore;
