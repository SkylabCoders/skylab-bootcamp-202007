import dispatcher from '../dispatcher';
import { booksSearch } from './finderActions';
import axios from 'axios';

jest.dontMock('./finderActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Finder Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call GET', async () => {
        let query = {
            title: 'query'
        };
        axios.get.mockReturnValue(
            new Promise((resolve) => resolve({ book: {} }))
        );
        await booksSearch({ query });
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual('/api/books');
    });
});
