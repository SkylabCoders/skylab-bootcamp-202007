import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _cart = [];

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

    getCart() {
      return _cart;
    }
}  

const productStore = new ProductStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const check = _cart.some((elem) => elem === action.data);
      if (check) {
        _cart = _cart.filter((elem) => elem !== action.data);
      } else {
        _cart = _cart;
      }
      _cart = [..._cart, action.data];
      productStore.emitChange();
      break;
    default:
      break;
  }
});

export default productStore;