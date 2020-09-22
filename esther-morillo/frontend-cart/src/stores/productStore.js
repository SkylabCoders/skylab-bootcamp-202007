import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _products = [];
let _cart = [];
let _priceProducts = [];

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

    getProductById(id) {
        const productCart = _products.find((element) =>element.id === id)
        _cart = [..._cart, productCart]
    }

    getCart() {
      return _cart;
    }

    getPriceProducts() {
      return _priceProducts = _cart.map((product) => product.price)
      
    }

}  

const productStore = new ProductStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT_LIST:
      _products = action.data;
      productStore.emitChange();
      break;
    default:
      break;
  }
});

export default productStore;