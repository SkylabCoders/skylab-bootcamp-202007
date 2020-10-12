import { saveCurrentUser, removeCurrentUser, existCurrentUser } from './userActions';
import ACTION_TYPES from './ACTION_TYPES';

describe('USER ACTIONS - REDUX - Test set', () => {

  it('Should return an action type of SAVE_CURRENT_USER with the userId when method saveCurrentUser is called', () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const expectedResult = { type: ACTION_TYPES.USER.SAVE_CURRENT_USER, payload: userId };

    const testResult = saveCurrentUser(userId);

    expect(testResult).toEqual(expectedResult);
  });

  it('Should return an action type of REMOVE_CURRENT_USER when method removeCurrentUser is called', () => {
    const expectedResult = { type: ACTION_TYPES.USER.REMOVE_CURRENT_USER };

    const testResult = removeCurrentUser();

    expect(testResult).toEqual(expectedResult);
  });

  it('Should call existCurrentUser function with following arguments: userId', async () => {
    const userId = 'auth0|5f53d71242e345006db2cc02';
    const userType = { type: 'recurrent' };

    const expectedDispatchFirstCall = { type: ACTION_TYPES.API.BEGIN_API_CALL };
    const expectedDispatchSecondCall = { type: ACTION_TYPES.USER.EXIST_CURRENT_USER_SUCCESSFUL };
    const expectedDispatchThirdCall = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }

    const dispatch = jest.fn();
    const returnedFunction = existCurrentUser(userId);
    await returnedFunction(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expectedDispatchFirstCall);
    expect(dispatch.mock.calls[1][0]).toEqual(expectedDispatchSecondCall);
    expect(dispatch.mock.calls[2][0].type).toBe(expectedDispatchThirdCall.type);
  });

});