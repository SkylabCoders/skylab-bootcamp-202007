import { beginApiCall, apiCallError } from './apiStatusActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('API STATUS ACTIONS - REDUX - Test set', () => {

  it('Should return an action type of BEGIN_API_CALL when method beginApiCall is called', () => {
    const testAction = { type: ACTION_TYPES.API.BEGIN_API_CALL };

    const testResult = beginApiCall();

    expect(testResult).toEqual(testAction);
  });

  it('Should return an action type of ERROR_API_CALL when method apiCallError is called', () => {
    const testAction = { type: ACTION_TYPES.API.ERROR_API_CALL };

    const testResult = apiCallError();

    expect(testResult).toEqual(testAction);
  });

})