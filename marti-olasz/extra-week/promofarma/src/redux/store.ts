import { createStore, compose } from 'redux';
import reducer from './reducer';

import products from '../productsMock';

const defaultState = {
	cart: [],
	products
};

const composeEnhancers =
	(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, defaultState, composeEnhancers());

export default store;
