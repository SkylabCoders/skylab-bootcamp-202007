import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadStores() {
  return axios.get('/api/stores').then((product) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_STORE_LIST,
      data: product.data
    });
  });
}

export function registerStore(dataStore) {
  return axios.post('/api/stores', dataStore).then((store) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_STORE,
        data: store.data
      });
  });
}

export function deleteStore(id) {
  return axios.delete(`/api/stores/${id}`).then((store) => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_STORE,
      data: store.data
    });
  });
}

export function updateStore(dataStore) {
  const storeId = dataStore.storeId._id ;
 
  return axios.put(`/api/stores/${storeId}`, dataStore).then((store) => {
    dispatcher.dispatch({
      type: actionTypes.UPDATE_STORE,
      data: store.data
    });
  });
}