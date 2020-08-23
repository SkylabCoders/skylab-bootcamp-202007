import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export async function loadProducts() {
	const devolver = await axios.get('/api/market/productlist');
	dispatcher.dispatch({
		type: actionTypes.LOAD_PRODUCTS,
		data: devolver.data
	});
}
