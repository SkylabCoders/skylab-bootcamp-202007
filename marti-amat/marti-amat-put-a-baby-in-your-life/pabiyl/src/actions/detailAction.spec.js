import dispatcher from '../Dispatcher';
import axios from 'axios';
import { loadDetails, saveUser, updateUser } from './detailAction';
import actionTypes from './actionTypes';
jest.dontMock('./detailAction');
jest.mock('axios');
jest.mock('../Dispatcher');
describe('Detail action', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call details api route', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await loadDetails();
        expect(axios.get.mock.calls[0][0]).toEqual('/api/detailUser/');
    });
    it('should call details api route', async () => {
        axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await saveUser();
        expect(axios.post.mock.calls[0][0]).toEqual('/api/detailUser');
    });
    it('should call details api route', async () => {
        const user = { _id: '1234' };
        axios.put.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await updateUser(user);
        expect(axios.put.mock.calls[0][0]).toEqual('/api/detailUser/1234');
    });
});