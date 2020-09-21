import dataList from '../products.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadProducts() {
  return new Promise((resolve) => {
    resolve(dataList);
  }).then((products) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data: products
    });
  });
}

