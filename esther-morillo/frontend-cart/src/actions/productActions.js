import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import productList from '../products.mock.js';

export function loadProducts() {   
    return new Promise((resolve) => {
      resolve(productList);
    }).then((products) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_PRODUCT_LIST,
        data: products
      });
    });
}
