import authStore from '../stores/authStore';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

describe('projectStore', () => {

  let callbackMockFunction;
  beforeEach(() => {
    callbackMockFunction = jest.fn();
    authStore.addChangeListener(callbackMockFunction);

  });

  afterEach(() => {
    authStore.removeChangeListener(callbackMockFunction);
  });

  it('should save user', () => {
    const user = {
      name: 'jordi'
    }
    dispatcher.dispatch({
      type: actionTypes.SAVE_USER,
      data: user
    });
    expect(authStore.getUser()).toEqual(user);
  });

  it('should remove user', () => {
    const user = null
    dispatcher.dispatch({
      type: actionTypes.REMOVE_USER,
      data: user
    });
    expect(user).toEqual(user);
  });

})