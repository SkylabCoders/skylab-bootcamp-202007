import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';
import {
  createShop,
  deleteShop,
  getShopList,
  updateShop,
  getShopsSearch
} from './shopActions';

jest.mock('axios');
jest.mock('../Dispatcher');
jest.dontMock('./shopActions');

describe('shopActions', () => {
  const shop = {};
  const data = {
    status: 200,
    data: [shop]
  };
  const id = 'id';
  afterEach(() => {
    dispatcher.dispatch.mockClear();
    axios.put.mockClear();
    axios.get.mockClear();
    axios.post.mockClear();
  });
  it('should return shops list', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getShopList();
    expect(axios.get.mock.calls[0][0]).toEqual(`/api/shops`);
  });
  it('should call dispatcher in getShopList with data', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getShopList();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_SHOP,
      data: [shop]
    });
  });
  it('should create shop', async () => {
    data.status = 201;
    axios.post.mockReturnValue(new Promise((resolve) => resolve(data)));
    await createShop(shop);
    expect(axios.post.mock.calls[0][0]).toEqual(`/api/shops`);
  });
  it('should delete shop', async () => {
    axios.delete.mockReturnValue(new Promise((resolve) => resolve(data)));
    data.status = 200;
    await deleteShop(id);
    expect(axios.delete.mock.calls[0][0]).toEqual(`/api/shops/${id}`);
  });
  it('should update shop', async () => {
    axios.put.mockReturnValue(new Promise((resolve) => resolve(data)));
    data.status = 200;
    await updateShop(id, shop);
    expect(axios.put.mock.calls[0][0]).toEqual(`/api/shops/${id}`);
  });
  it('should update shop', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    data.status = 200;
    const query = 'shops';
    const search = 'bombastoShop';
    await getShopsSearch(query, search);
    expect(axios.get.mock.calls[0][0]).toEqual(
      `/api/shops/?${query}=${search}`
    );
  });
  it('should not call dispatcher if data status isnt 200 in getShopList', async () => {
    data.status = 400;
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getShopList();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should not call dispatcher if data status isnt 200 in createShop', async () => {
    data.status = 400;
    axios.post.mockReturnValue(new Promise((resolve) => resolve(data)));
    await createShop();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should not call dispatcher if data status isnt 200 in deleteShop', async () => {
    data.status = 400;
    axios.delete.mockReturnValue(new Promise((resolve) => resolve(data)));
    await deleteShop();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should not call dispatcher if data status isnt 200 in updateShop', async () => {
    data.status = 400;
    axios.put.mockReturnValue(new Promise((resolve) => resolve(data)));
    await updateShop();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should not call dispatcher if data status isnt 200 in getShopsSearch', async () => {
    data.status = 400;
    axios.put.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getShopsSearch();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
});
