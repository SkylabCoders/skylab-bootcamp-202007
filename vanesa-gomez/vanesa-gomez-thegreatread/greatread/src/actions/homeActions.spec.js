import dispatcher from '../dispatcher';
import { genreBooksSearch } from './homeActions';
import axios from 'axios';

jest.dontMock('./homeActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Home Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call GET', async () => {
        let query = '';
        let subject = '';
        let params = { params: { subject: query } };
        axios.get.mockReturnValue(
            new Promise((resolve) => resolve({ book: {} }))
        );
        await genreBooksSearch(query, subject);
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual('/api/books', params);
    });
});
