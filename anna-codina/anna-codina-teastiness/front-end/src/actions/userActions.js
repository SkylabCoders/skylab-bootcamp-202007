import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function getUser(email, sub) {
  return axios.get(`/api/users/?email=${email}&sub=${sub}`).then((user) => {
    if (user.status === 200 || user.status === 201) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: user.data
      });
    }
  });
}

export function updateFavouriteTea(userId, teaId) {
  return axios.put(`/api/users/${userId}/?teaId=${teaId}`).then((user) => {
    if (user.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: user.data
      });
    }
  });
}

export function updateFavouriteShop(userId, shopId) {
  return axios.put(`/api/users/${userId}/?shopId=${shopId}`).then((user) => {
    if (user.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_USER,
        data: user.data
      });
    }
  });
}

export function logoutUser() {
  return dispatcher.dispatch({
    type: actionTypes.LOGOUT_USER
  });
}
