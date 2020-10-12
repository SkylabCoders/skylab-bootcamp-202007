import ACTION_TYPES from './../actions/ACTION_TYPES';
import apiCallStatusReducer from './apiCallStatusReducer';

describe('API STATUS REDUCER test set', ()=>{
  
  it('Should return state + 1 when called with action type BEGIN_API_CALL', ()=>{
    const initialState = 0;
    const testAction = {
      type: ACTION_TYPES.API.BEGIN_API_CALL
    }

    const testResult = apiCallStatusReducer(initialState, testAction);

    expect(testResult).toEqual(initialState + 1);
  });

  it('Should return state - 1 when called with action type ERROR_API_CALL', ()=>{
    const initialState = 2;
    const testAction = {
      type: ACTION_TYPES.API.ERROR_API_CALL
    }

    const testResult = apiCallStatusReducer(initialState, testAction);

    expect(testResult).toEqual(initialState - 1);
  });

  it('Should return previous state when called with an invalid action type', ()=>{
    const initialState = 0;
    const testAction = {
      type: 'INVALID ACTION TYPE'
    }

    const testResult = apiCallStatusReducer(initialState, testAction);

    expect(testResult).toEqual(initialState);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = 0;

    const testResult = apiCallStatusReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = apiCallStatusReducer();

    expect(testResult).toEqual(0);
  });

})