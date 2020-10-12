import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _shops = [];
let _shopsSearch = [];

class ShopStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getShopList() {
    return _shops;
  }
  getSearchResults() {
    return _shopsSearch;
  }
  getShopById(_id) {
    return _shops.find((shop) => shop._id === _id);
  }
  getResultById(_id) {
    return _shopsSearch.find((shop) => shop._id === _id);
  }
  getShopByName(name) {
    return _shops.find(
      (shop) => shop.name.toLowerCase() === name.toLowerCase()
    );
  }
}

const shopStore = new ShopStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_SHOP:
      _shops = action.data;
      shopStore.emitChange(_shops);
      break;
    case actionTypes.LOAD_SHOP_SEARCH:
      _shopsSearch = action.data;
      shopStore.emitChange(_shopsSearch);
      break;
    case actionTypes.CREATE_SHOP:
      _shops = [..._shops, action.data];
      shopStore.emitChange(_shops);
      break;
    case actionTypes.DELETE_SHOP:
      _shops = _shops.filter((shop) => shop._id !== action.data._id);
      _shopsSearch = _shopsSearch.filter(
        (shop) => shop._id !== action.data._id
      );
      shopStore.emitChange(_shops);
      break;
    case actionTypes.UPDATE_SHOP:
      _shops = _shops.map((shop) => {
        if (shop._id === action.data._id) {
          shop = action.data;
        }
        return shop;
      });
      shopStore.emitChange(_shops);
      break;
    default:
      break;
  }
});

export default shopStore;
