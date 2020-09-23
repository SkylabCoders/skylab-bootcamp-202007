import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import productList from '../products.mock';

export function loadProducts() {   
  dispatcher.dispatch({
    type: actionTypes.LOAD_PRODUCT_LIST,
    data: productList
  });   
}

export function addToCart(product) {  
  dispatcher.dispatch({
    type: actionTypes.ADD_CART,
    data: product
  });   
}
