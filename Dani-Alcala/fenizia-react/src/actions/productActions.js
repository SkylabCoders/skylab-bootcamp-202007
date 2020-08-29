import productList from "../product.mock.js";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadProducts() {
  return new Promise((resolve) => {
    resolve(productList);
  }).then((product) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data: product,
    });
  });
}
