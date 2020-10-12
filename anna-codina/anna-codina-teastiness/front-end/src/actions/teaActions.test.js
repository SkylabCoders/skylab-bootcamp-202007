import axios from 'axios';
import {
  getPrincipalTeas,
  getTeaVarById,
  getTeasVarieties,
  createTeaVar,
  updateTeaVar,
  getTeasVarietiesSearch,
  deleteTeaVarieties
} from './teaActions';
import dispatcher from '../Dispatcher';

jest.mock('axios');
jest.mock('../Dispatcher');
jest.dontMock('./teaActions');

describe('teaActions', () => {
  const query = 'tea';
  const search = 'matcha';
  const tea = {};
  let data;
  const id = 13;
  beforeEach(() => {
    data = {
      status: 200,
      data: tea
    };
  });
  afterEach(() => {
    dispatcher.dispatch.mockClear();
    axios.get.mockClear();
    axios.post.mockClear();
    axios.put.mockClear();
  });
  it('should return variety tea list if status is 200', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeasVarieties();
    expect(axios.get.mock.calls[0][0]).toEqual('/api/teaVarieties');
  });
  it('should not call dispatcher if data status isnt 200 in get teas varieties', async () => {
    data.status = 400;
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeasVarieties();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should return principal tea list if status is 200', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getPrincipalTeas();
    expect(axios.get.mock.calls[0][0]).toEqual('/api/principalTeas');
  });
  it('should not call dispatcher if data status isnt 200 in getPrincipalTeas', async () => {
    data.status = 400;
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getPrincipalTeas();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should return a variety tea with id if status is 200', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeaVarById(id);
    expect(axios.get.mock.calls[0][0]).toEqual(`/api/teaVarieties/${id}`);
  });
  it('should not call dispatcher if data status isnt 200 in mockReturnValue', async () => {
    data.status = 400;
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeaVarById();
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should ben called with second argument tea object in createTeaVar', async () => {
    data.status = 201;
    axios.post.mockReturnValue(new Promise((resolve) => resolve(data)));
    await createTeaVar(tea);
    expect(axios.post.mock.calls[0][1]).toEqual(tea);
  });
  it('should not call dispatcher if data status isnt 201 in mockReturnValue', async () => {
    data.status = 400;
    axios.post.mockReturnValue(new Promise((resolve) => resolve(data)));
    await createTeaVar(tea);
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should ben called with second argument tea in updateTeaVar', async () => {
    axios.put.mockReturnValue(new Promise((resolve) => resolve(data)));
    await updateTeaVar(id, tea);
    expect(axios.put.mock.calls[0][1]).toEqual(tea);
  });
  it('should not call dispatcher if data status isnt 201 in mockReturnValue', async () => {
    data.status = 400;
    axios.put.mockReturnValue(new Promise((resolve) => resolve(data)));
    await updateTeaVar(id, tea);
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should get search list with getTeasVarietiesSearch with query', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeasVarietiesSearch(query, search);
    expect(axios.get.mock.calls[0][0]).toEqual(
      `/api/teaVarieties/?${query}=${search}`
    );
  });
  it('should not call dispatcher if data status isnt 200 in getTeasVarietiesSearch', async () => {
    data.status = 400;
    axios.get.mockReturnValue(new Promise((resolve) => resolve(data)));
    await getTeasVarietiesSearch(query, search);
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
  it('should delete tea variety when you call deleteTeaVarieties with id', async () => {
    axios.delete.mockReturnValue(new Promise((resolve) => resolve(data)));
    await deleteTeaVarieties(id);
    expect(axios.delete.mock.calls[0][0]).toEqual(`/api/teaVarieties/${id}`);
  });
  it('should not call dispatcher if data status isnt 200 in deleteTeaVarieties', async () => {
    data.status = 400;
    axios.delete.mockReturnValue(new Promise((resolve) => resolve(data)));
    await deleteTeaVarieties(id);
    expect(dispatcher.dispatch).not.toHaveBeenCalled();
  });
});
