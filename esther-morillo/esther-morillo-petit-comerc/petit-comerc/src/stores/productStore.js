import {
    EventEmitter
} from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _stores = [];
let _product = null;
let _filterStore = [];

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

    getStores() {
        return _stores;
    }

    getProductStoreById(id) {
        return _stores.find((store) => store._id === id);
    }

    getProductById(products, productId) {
        return products.find((product) => product._id === productId);
    }

    getProduct() {
        return _product;
    }

    getProductStoreOwner(storeId) {
       return _stores.filter((store) => store._id === storeId);
    }

    getFilter(data) {
        _filterStore = _stores.filter((store) => store.type === data);
        return data === 'Todos' ? _stores : _filterStore;
    }
}


const productStore = new ProductStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_STORE_LIST:
            _stores = action.data;
            productStore.emitChange();
            break;
        case actionTypes.LOAD_PRODUCT:
            _product = productStore.getProductById(action.data.stores,
                action.data.urlProduct);
            productStore.emitChange();
            break;
        case actionTypes.DELETE_STORE:
            _stores = _stores.filter((store) => store._id !== action.data);
            productStore.emitChange();
            break;
        default:
            // throw `The action type is unknown. action.type: ${action.type}`;
            break;
    }
});

export default productStore;