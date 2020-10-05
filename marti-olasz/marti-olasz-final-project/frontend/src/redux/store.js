import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/mainReducer';

const defaultState = {
  bandReducer: {
    disc: null,
    photo: null,
    band: {},
    bandFollowers: null,
    editInfo: {}
  },
  authReducer: {
    userIdentifier: null,
    user: {},
    editInfo: {}
  },
  infoReducer: {
    image: {},
    error: null,
    loading: null
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  defaultState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
