import dispatcher from '../dispatcher';
import { loadBookList, loadBookById } from './listActions';
import axios from 'axios';

jest.dontMock('./listActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('List Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call GET ', async () => {
        let query = {
            title: 'tintin'
        };
        axios.get.mockReturnValue(
            new Promise((resolve) => resolve({ book: {} }))
        );
        await loadBookList({ query });
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual(`/api/books`);
    });

    it('should call GET loadBookById', async () => {
        let id = '';
        axios.get.mockReturnValue(
            new Promise((resolve) => resolve({ book: {} }))
        );
        await loadBookById({ id });
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual(`/api/books`);
    });
});
