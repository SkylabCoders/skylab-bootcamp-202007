import ACTION_TYPES from './../actions/ACTION_TYPES';
import budgetReducer from './budgetReducer';

describe('BUDGET REDUCER test set', ()=>{
  
  it('Should add calculated data into state when CALCULATE_BUDGET action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.BUDGET.CALCULATE_BUDGET,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = budgetReducer(initialState, testAction);

    expect(testResult.calculated).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into current property of state when LOAD_BUDGET action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.BUDGET.LOAD_BUDGET,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = budgetReducer(initialState, testAction);

    expect(testResult.current).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into current property of state when UPDATE_BUDGET action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.BUDGET.UPDATE_BUDGET,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = budgetReducer(initialState, testAction);

    expect(testResult.current).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into itemBeingCreated property of state when CREATE_BUDGET action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.BUDGET.CREATE_BUDGET,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = budgetReducer(initialState, testAction);

    expect(testResult.itemBeingCreated).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should return previous state when DELETE_BUDGET action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.BUDGET.DELETE_BUDGET,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = budgetReducer(initialState, testAction);

    expect(testResult).toEqual(initialState);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = {};

    const testResult = budgetReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = budgetReducer();

    expect(Object.keys(testResult).length).toEqual(3);
    expect(testResult.constructor === Object).toBe(true);
    expect(testResult.data).not.toBe(undefined);
    expect(testResult.data.constructor === Object).toBe(true);
    expect(testResult.calculated).not.toBe(undefined);
    expect(testResult.calculated.constructor === Object).toBe(true);
    expect(testResult.current).not.toBe(undefined);
    expect(testResult.current.constructor === Object).toBe(true);
  });

})