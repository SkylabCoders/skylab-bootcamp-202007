import rootReducer from './rootReducer';
import { combineReducers } from 'redux';
import project from './projectReducer';
import portfolio from './portfolioReducer';
import budget from './budgetReducer';
import quotation from './quotationReducer';
import user from './userReducer';
import apiCallsInProgress from './apiCallStatusReducer';
import errors from './errorReducer';

jest.mock(redux, 'combineReducers');

describe('ROOT REDUCER test set', ()=>{
  
  xit('Should return a constant with the result of a call to combineReducers method with a list of reducers', ()=>{
    const REDUCERS = {
      project,
      portfolio,
      budget,
      quotation,
      user,
      apiCallsInProgress,
      errors
    };
    const testResult = combineReducers(REDUCERS);

    expect(combineReducers).toHaveBeenCalled();
    expect(testResult).toEqual(rootReducer);
  });

});
