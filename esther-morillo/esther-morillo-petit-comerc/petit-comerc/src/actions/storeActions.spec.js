import dispatcher from '../appDispatcher';
import { loadStores, registerStore, deleteStore, updateStore } from './storeActions';
import axios from 'axios';

jest.dontMock('./storeActions');
jest.mock('axios');
jest.mock('../appDispatcher');

describe('Store Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });

    it('should call GET', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve(({ _id: '001' }))));
        await loadStores({ _id: '001' });
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual('/api/stores');
    });

    it('should call POST', async () => {
        axios.post.mockReturnValue(new Promise((resolve) => resolve(({ storeName: 'Melicoto' }))));
        await registerStore({ storeName: 'Melicoto' });
        const postCall = axios.post.mock.calls[0][0];
        expect(postCall).toEqual('/api/stores');
    });

    it('should call DELETE', async () => {
        let _id = '555';

        axios.delete.mockReturnValue(new Promise((resolve) => resolve(({data: {}}))));
        await deleteStore(_id);
        const deleteCall = axios.delete.mock.calls[0][0];
        expect(deleteCall).toEqual(`/api/stores/${_id}`);
    });

    it('should call PUT', async () => {
        const dataStore = {
            storeId: '111',
            storeName: 'Melicotó'
        }
        const storeId = dataStore.storeId;

        axios.post.mockReturnValue(new Promise((resolve) => resolve({data: {}})));
        await updateStore(dataStore);
        const putCall = axios.put.mock.calls[0][0];
        expect(putCall).toEqual(`/api/stores/${storeId}`, dataStore);
    });
})
