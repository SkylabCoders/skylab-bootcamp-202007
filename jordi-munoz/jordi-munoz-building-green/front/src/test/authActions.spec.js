import { saveUser, removeUser } from '../actions/authActions';
import dispatcher from '../appDispatcher';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';

jest.dontMock('../actions/authActions');
jest.mock('axios');
jest.mock('../appDispatcher');


describe('authAction', () => {

  afterEach(() => {
    dispatcher.dispatch.mockClear();
  })

  it('should call a post without name/id', async () => {
    axios.post.mockReturnValue(new Promise((resolve, reject) => resolve({ name: 'jordi' })));
    await saveUser({ name: null });
    const postCall = axios.post.mock.calls[0][0];

    expect(postCall).toEqual('api/users/');

  });

  it('should call a post with name', async () => {
    axios.post.mockReturnValue(new Promise((resolve, reject) => resolve({ name: 'jordi' })));
    await saveUser({ name: 'jordi' });
    const postCall = axios.post.mock.calls[0][0];

    expect(postCall).toEqual('api/users/');

  });

  it('should remove user', async () => {
    await removeUser();
    const dispatchCallback = {
      type: actionTypes.REMOVE_USER,
    }
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual(dispatchCallback);
  })

})