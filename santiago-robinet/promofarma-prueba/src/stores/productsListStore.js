import { EventEmitter } from "events";
import dispatcher from "../dispatcher.";
import actionTypes from "../actions/actionTypes";

const CHANGE = "change";
let _products = [];

class ProductsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  getProducts() {
    return _products;
  }
}

const productsStore = new ProductsStore();

dispatcher.register((action) => {
    switch(action.type){

        case actionTypes.LOAD_PRODUCTS:
            _products = action.data
            productsStore.emitChange();
            break;

        case actionTypes.IN_CART:
            _products[action.data.id -1].inCart = true;
            productsStore.emitChange();
            break;

        default:
            break;
    }
});

export default productsStore;
