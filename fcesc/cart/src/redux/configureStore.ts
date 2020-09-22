import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(REDUCERS_INITIAL_STATE: Object) {
  const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    rootReducer,
    REDUCERS_INITIAL_STATE,
    composeEnhancers(applyMiddleware(thunk))
  );
}