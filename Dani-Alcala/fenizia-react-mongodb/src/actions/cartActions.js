import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadCart() {
  dispatcher.dispatch({
    type: actionTypes.LOAD_CART,
  });
}

export function getCart() {
  dispatcher.dispatch({
    type: actionTypes.UPDATE_CART_ITEM
  });
}

export function removeProduct(id) {
  dispatcher.dispatch({
    type: actionTypes.DELETE_CART_ITEM
  });
}

export function addNumberCart() {
  dispatcher.dispatch({
    type: actionTypes.ADD_NUMBER_CART
  });
}

