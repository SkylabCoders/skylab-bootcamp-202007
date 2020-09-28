import ACTION_TYPES from './../actions/ACTION_TYPES';
import portfolioReducer from './portfolioReducer';

describe('PORTFOLIO REDUCER test set', ()=>{
  
  it('Should add calculated data into state when CALCULATE_PORTFOLIO action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PORTFOLIO.CALCULATE_PORTFOLIO,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = portfolioReducer(initialState, testAction);

    expect(testResult.calculated).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add flow data into state when LOAD_PORTFOLIO_FLOW action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_FLOW,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = portfolioReducer(initialState, testAction);

    expect(testResult.flow).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into state when LOAD_PORTFOLIO_INFO action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PORTFOLIO.LOAD_PORTFOLIO_INFO,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = portfolioReducer(initialState, testAction);

    expect(testResult.data).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = {};

    const testResult = portfolioReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = portfolioReducer();

    expect(Object.keys(testResult).length).toEqual(3);
    expect(testResult.constructor === Object).toBe(true);
    expect(testResult.data).not.toBe(undefined);
    expect(testResult.data.constructor === Object).toBe(true);
    expect(testResult.flow).not.toBe(undefined);
    expect(testResult.flow.constructor === Object).toBe(true);
    expect(testResult.calculated).not.toBe(undefined);
    expect(testResult.calculated.constructor === Object).toBe(true);
  });

})