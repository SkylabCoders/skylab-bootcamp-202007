import { combineReducers } from 'redux';

import bandReducer from './bandReducer';
import authReducer from './authReducer';
import infoReducer from './infoReducer';

const reducer = combineReducers({
  bandReducer,
  authReducer,
  infoReducer
});

export default reducer;
