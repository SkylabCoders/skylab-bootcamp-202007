import ACTION_TYPES from './../actions/ACTION_TYPES';
import userReducer from './userReducer';

describe('USER REDUCER test set', ()=>{
  
  it('Should add a new Current User to state when SAVE_CURRENT_USER action type is called', ()=>{
    const initialState = {};
    const userType = { type: 'recurrent', uid: 'auth0|5f53d71242e345006db2cc02' };
    const testAction = {
      type: ACTION_TYPES.USER.SAVE_CURRENT_USER,
      payload: userType
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual( { currentUserType: userType.type, uid: userType.uid } );
  });

  it('Should set currentUser to undefined when REMOVE_CURRENT_USER action type is called', ()=>{
    const initialState = { currentUser: "auth0|5f53d71242e345006db2cc02" };
    const testAction = {
      type: ACTION_TYPES.USER.REMOVE_CURRENT_USER
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult.currentUser).toEqual(undefined);
  });

  it('Should return a user type of \'new\' when called with a new user', ()=>{
    const initialState = {};
    const userType = { type: 'new', created: 'successful', signupForm: false, uid: 'auth0|5f53d71242e345006db2cc02' };
    const testAction = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual( { currentUserType: userType.type, uid: userType.uid } );
  });

  it('Should return a user type of \'recurrent\' when called with a recurrent user id', ()=>{
    const initialState = {};
    const userType = { type: 'recurrent', uid: 'auth0|5f53d71242e345006db2cc02' };
    const testAction = {
      type: ACTION_TYPES.USER.EXIST_CURRENT_USER,
      payload: userType
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual( { currentUserType: userType.type, uid: userType.uid } );
  });

  it('Should return a state of userToCreate when a user is being updated in the db', ()=>{
    const initialState = {};
    const user = { name: 'John', user_sub: "auth0|5f53d71242e345006db2cc02" };
    const testAction = {
      type: ACTION_TYPES.USER.UPDATE_USER,
      payload: user
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual( { userToUpdate: user } );
  });

  it('Should return a state of userToCreate = undefined and the unique user id into userToDelete state when before confirming a user will be permanently deleted in the db', ()=>{
    const initialState = {};
    const user = "auth0|5f53d71242e345006db2cc02";
    const testAction = {
      type: ACTION_TYPES.USER.DELETE_USER,
      payload: user
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual( { userToUpdate: undefined, userToDelete: user } );
  });

  it('Should return previous state when called with an invalid action type', ()=>{
    const initialState = {};
    const testAction = {
      type: 'INVALID ACTION TYPE'
    }

    const testResult = userReducer(initialState, testAction);

    expect(testResult).toEqual(initialState);
  });

  it('Should return previous state when no action is given', ()=>{
    const initialState = {};

    const testResult = userReducer(initialState);

    expect(testResult).toEqual(initialState);
  });

  it('Should provide a default initial state at first run if it is not provided', ()=>{
    const testResult = userReducer();

    expect(Object.keys(testResult).length).toEqual(0);
    expect(testResult.constructor === Object).toBe(true);
  });

})