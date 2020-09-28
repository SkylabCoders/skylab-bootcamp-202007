import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export async function getShopList() {
  return await axios.get('/api/shops').then((shopList) => {
    if (shopList.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_SHOP,
        data: shopList.data
      });
    }
  });
}

export async function createShop(shop) {
  return await axios.post('/api/shops', shop).then((newShop) => {
    if (newShop.status === 201) {
      dispatcher.dispatch({
        type: actionTypes.CREATE_SHOP,
        data: newShop.data
      });
    }
  });
}

export async function deleteShop(id) {
  return await axios.delete(`/api/shops/${id}`).then((shop) => {
    if (shop.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.DELETE_SHOP,
        data: shop.data
      });
    }
  });
}

export async function updateShop(id, newInfo) {
  return await axios.put(`/api/shops/${id}`, newInfo).then((shop) => {
    if (shop.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.UPDATE_SHOP,
        data: shop.data
      });
    }
  });
}

export async function getShopsSearch(query, search) {
  return axios.get(`/api/shops/?${query}=${search}`).then((shopList) => {
    if (shopList.status === 200) {
      dispatcher.dispatch({
        type: actionTypes.LOAD_SHOP_SEARCH,
        data: shopList.data
      });
    }
  });
}
