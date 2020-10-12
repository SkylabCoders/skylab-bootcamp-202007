import actionTypes from '../actions/actionTypes';
import dispatcher from '../Dispatcher';
import userStore from './userStore';

describe('userStore', () => {
  const id = '13';
  let action;
  let callbackMockFunction;
  const user = { owner: [{ _id: id }] };

  beforeEach(() => {
    callbackMockFunction = jest.fn();
    userStore.addChangeListener(callbackMockFunction);
  });
  afterEach(() => {
    userStore.removeChangeListener(callbackMockFunction);
  });
  it('should create', () => {
    expect(userStore).toBeDefined();
  });
  it('should return user', () => {
    action = {
      type: actionTypes.LOAD_USER,
      data: user
    };
    dispatcher.dispatch(action);
    expect(userStore.getUser()).toEqual(action.data);
  });
  it('should logout user', () => {
    action = {
      type: actionTypes.LOGOUT_USER
    };
    dispatcher.dispatch(action);
    expect(userStore.getUser()).toEqual(null);
  });
  it('should return owner frist position', () => {
    action = {
      type: actionTypes.LOAD_USER,
      data: user
    };

    dispatcher.dispatch(action);
    expect(userStore.getOwnShopById(id)).toEqual(action.data.owner[0]);
  });
  it('should return undefined with wrong actiontype', () => {
    action = {
      type: 'Load-pachachos',
      data: []
    };
    dispatcher.dispatch(action);
    expect(userStore).toBe.truthy;
  });
});
