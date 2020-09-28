import dispatcher from '../appDispatcher';
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadUserBySub(sub) {
  return axios.get(`/api/users/?sub=${sub}`).then((user) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_USER,
      data: user.data
    });
  });
}

export function createUser(dataUser) {
  return axios.post('/api/users', dataUser).then((user) => {
    dispatcher.dispatch({
      type: actionTypes.CREATE_USER,
      data: user.data
    });
  });
}

export function addProductCart(userSub, product) {
  const obj = { productId: product }
  return axios.put(`/api/users/${userSub}`, obj).then((userData) => {
    dispatcher.dispatch({
      type: actionTypes.ADD_CART,
      data: userData.data
    });
  });
}

export function deleteProductCart(id, user) {
  return axios.put(`/api/products/${user}`, {id}).then((product) => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_USER,
      data: product.data
    });
  });
}