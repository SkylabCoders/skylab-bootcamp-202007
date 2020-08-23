import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export async function loadProducts() {
	const devolver = await axios.get('/api/market/productlist');

	console.log(devolver);
	// .then((product) => {
	// 	console.log(product);
	// 	dispatcher.dispatch({
	// 		type: actionTypes.LOAD_PRODUCTS,
	// 		data: product
	// 	});
	// });
}
