import ACTION_TYPES from './../actions/ACTION_TYPES';
import projectReducer from './projectReducer';

describe('PROJECT REDUCER test set', ()=>{
  
  it('Should add calculated data into state when CALCULATE_PROJECT action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.CALCULATE_PROJECT,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.calculated).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add flow data into state when LOAD_PROJECT_FLOW action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.LOAD_PROJECT_FLOW,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.flow).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into state when LOAD_PROJECT_INFO action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.LOAD_PROJECT_INFO,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.data).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into current property of state when LOAD_PROJECT_BYSLUG action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.LOAD_PROJECT_BYSLUG,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.current).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into current property of state when UPDATE_PROJECT action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.UPDATE_PROJECT,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.current).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should add data into itemBeingCreated property of state when CREATE_PROJECT action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.CREATE_PROJECT,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult.itemBeingCreated).toEqual(testAction.payload);
    expect(Object.keys(testResult).length).toEqual(1);
  });

  it('Should return previous state when DELETE_PROJECT action type is called', ()=>{
    const initialState = {};
    const testAction = {
      type: ACTION_TYPES.PROJECT.DELETE_PROJECT,
      payload: { data: 'someReallyBigData' }
    }

    const testResult = projectReducer(initialState, testAction);

    expect(testResult).toEqual(initialState);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = {};

    const testResult = projectReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = projectReducer();

    expect(Object.keys(testResult).length).toEqual(4);
    expect(testResult.constructor === Object).toBe(true);
    expect(testResult.data).not.toBe(undefined);
    expect(testResult.data.constructor === Object).toBe(true);
    expect(testResult.flow).not.toBe(undefined);
    expect(testResult.flow.constructor === Object).toBe(true);
    expect(testResult.calculated).not.toBe(undefined);
    expect(testResult.calculated.constructor === Object).toBe(true);
    expect(testResult.current).not.toBe(undefined);
    expect(testResult.current.constructor === Object).toBe(true);
  });

})