import axios from 'axios'
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadPoems() {
  return axios.get('/api/poems').then((poems) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_POEMS,
      data: poems.data
    });
  });
}

export function loadPoem(_id) {
  return axios.get(`/api/poems/${_id}`).then((poem) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_POEM,
      data: poem.data
    });
  });
}

export function savePoem(poem) {
  return axios.post('/api/poems', poem).then((savedPoem) => {
    dispatcher.dispatch({
      type: actionTypes.CREATE_POEM,
      data: savedPoem.data
    });
  });
}

export function deletePoem(_id) {
  return axios.delete(`/api/poems/${_id}`).then(() => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_POEM,
      data: {
        _id
      }
    });
  });
}

export function likePoem(poemId, userId) {
  return axios.put(`/api/poems/${poemId}`, {
    userId
  }).then((modifiedPoem) => {
    dispatcher.dispatch({
      type: actionTypes.LIKE_POEM,
      data: modifiedPoem.data
    });
  });
}

export function sortByCriteria(criteria) {
  dispatcher.dispatch({
    type: actionTypes.SORT_POEMS,
    data: criteria
  });
}