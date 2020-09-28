import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';
import {
  getUser,
  updateFavouriteShop,
  updateFavouriteTea,
  logoutUser
} from './userActions';
jest.dontMock('./userActions');
jest.mock('axios');
jest.mock('../Dispatcher');

describe('userActions', () => {
  const email = 'test@mail.com';
  const userId = 13;
  const id = '12';
  const shop = 'usagi';
  const sub = '12';
  afterEach(() => {
    dispatcher.dispatch.mockClear();
    axios.put.mockClear();
  });
  it('should call getUser', async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve({ email: email }))
    );
    await getUser(email, sub);
    expect(axios.get.mock.calls[0][0]).toEqual(
      `/api/users/?email=${email}&sub=${sub}`
    );
  });
  it('should call dispatcher in getUser with data', async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) => resolve({ data: email, status: 200 }))
    );
    await getUser(email);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: email
    });
  });
  it('should call updateFavouriteTea', async () => {
    axios.put.mockReturnValue(new Promise((resolve) => resolve({ userId })));
    await updateFavouriteTea(userId, id);
    expect(axios.put.mock.calls[0][0]).toEqual(
      `/api/users/${userId}/?teaId=${id}`
    );
  });
  it('should call dispatcher in updateFavouriteTea with data', async () => {
    axios.put.mockReturnValue(
      new Promise((resolve) => resolve({ data: email, status: 200 }))
    );
    await updateFavouriteTea(userId, id);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: email
    });
  });
  it('should call updateFavouriteShop', async () => {
    axios.put.mockReturnValue(new Promise((resolve) => resolve({ id })));
    await updateFavouriteShop(userId, id);
    expect(axios.put.mock.calls[0][0]).toEqual(
      `/api/users/${userId}/?shopId=${id}`
    );
  });
  it('should call dispatcher in updateFavouriteShop with data', async () => {
    axios.put.mockReturnValue(
      new Promise((resolve) => resolve({ data: email, status: 200 }))
    );
    await updateFavouriteShop(userId, shop, id);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: email
    });
  });
  it('should call logoutUser', () => {
    logoutUser();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOGOUT_USER
    });
  });
});
