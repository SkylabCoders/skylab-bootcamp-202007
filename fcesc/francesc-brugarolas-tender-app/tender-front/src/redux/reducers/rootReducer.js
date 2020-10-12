import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import quotation from './quotationReducer';
import user from './userReducer';
import apiCallsInProgress from './apiCallStatusReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
  project,
  portfolio,
  budget,
  quotation,
  user,
  apiCallsInProgress,
  errors
});

export default rootReducer;