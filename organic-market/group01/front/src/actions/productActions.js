import productList from '../../src/product.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios'


export function loadProducts() {
  axios.get('http://192.168.0.152:3001/market/productlist')
  // return new Promise((resolve) => {
  //   resolve(productList);
  // })
  .then((product) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PRODUCTS,
			data: product
		});
	});
}
