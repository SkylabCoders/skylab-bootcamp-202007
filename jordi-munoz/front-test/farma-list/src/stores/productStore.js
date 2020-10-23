import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _products = [];

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
    return _products;
  }

}

const productStore = new ProductStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      _products = action.data;
      productStore.emitChange();
      break;
    default:
      break;
  }
});

export default productStore;
