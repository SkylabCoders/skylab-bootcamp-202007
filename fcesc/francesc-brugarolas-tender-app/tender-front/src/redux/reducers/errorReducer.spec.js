import ACTION_TYPES from './../actions/ACTION_TYPES';
import errorReducer from './errorReducer';

describe('ERROR REDUCER test set', ()=>{
  
  it('Should add data into state when LOG_ERROR action type is called', ()=>{
    const initialState = [];
    const testAction = {
      type: ACTION_TYPES.ERROR.LOG_ERROR,
      payload: { data: 'someError' }
    }

    const testResult = errorReducer(initialState, testAction);
    const expectedResult = [ ...initialState, testAction.payload ];

    expect(testResult).toEqual(expectedResult);
    expect(testResult.length).toEqual(1);
  });

  it('Should remove last item from state array when REMOVE_ERROR action type is called', ()=>{
    const initialState = [{ data: 'someError' }];
    const testAction = {
      type: ACTION_TYPES.ERROR.REMOVE_ERROR
    }

    const testResult = errorReducer(initialState, testAction);

    expect(testResult).toEqual([]);
    expect(testResult.length).toEqual(0);
  });

  it('Should return same state when REMOVE_ERROR action type is called and there is no previous state', ()=>{
    const initialState = [];
    const testAction = {
      type: ACTION_TYPES.ERROR.REMOVE_ERROR
    }

    const testResult = errorReducer(initialState, testAction);

    expect(testResult).toEqual([]);
    expect(testResult.length).toEqual(0);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = [];

    const testResult = errorReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = errorReducer();

    expect(Object.keys(testResult).length).toEqual(0);
    expect(testResult.constructor === Array).toBe(true);
  });

})