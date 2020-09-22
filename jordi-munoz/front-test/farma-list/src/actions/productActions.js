import dataList from '../products.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadProducts() {
  dispatcher.dispatch({
    type: actionTypes.LOAD_PRODUCTS,
    data: dataList
  });

}

export function loadCart() {
  dispatcher.dispatch({
    type: actionTypes.LOAD_CART,
  });

}

export function addToCart(product) {
  dispatcher.dispatch({
    type: actionTypes.ADD_TO_CART,
    data: dataList
  });

}

