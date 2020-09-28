import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadProducts() {
  return axios.get('/api/products').then((product) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_PRODUCT_LIST,
      data: product.data
    });
  });
}

export function createProduct(dataProduct) {
  return axios.post('/api/products', dataProduct).then((product) => {
    dispatcher.dispatch({
      type: actionTypes.CREATE_PRODUCT,
      data: product.data
    });
  });
}

export async function loadProduct(urlStoreId, urlProduct) {
  axios.get('/api/products').then((product) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_PRODUCT,
      data: {
        urlStoreId,
        urlProduct,
        stores: product.data
      }
    });
  });
  
}