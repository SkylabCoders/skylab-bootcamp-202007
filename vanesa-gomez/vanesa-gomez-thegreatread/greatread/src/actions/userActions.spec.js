import dispatcher from '../dispatcher';
import { createUser, loadUser, favoriteBook } from './userActions';
import axios from 'axios';

jest.dontMock('./userActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('User Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call GET', async () => {
        let sub = '123';

        axios.get.mockReturnValue(
            new Promise((resolve) => resolve({ data: {} }))
        );
        await loadUser(sub);
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual(`/api/users/${sub}`);
    });

    it('should call POST', async () => {
        axios.post.mockReturnValue(
            new Promise((resolve) => resolve({ userName: 'Bombasto' }))
        );
        await createUser({ userName: 'Bombasto' });
        const postCall = axios.post.mock.calls[0][0];
        expect(postCall).toEqual('/api/users');
    });

    it('should call PUT for favoriteBooks', async () => {
        const userSub = '0021';
        const book = '12345';
        let user = {
            sub: '0011',
            favoriteBook: ['013']
        };

        axios.put.mockReturnValue(
            new Promise((resolve) => resolve(user.favoriteBook[0]))
        );
        await favoriteBook(userSub, book);
        const putCall = axios.put.mock.calls[0][0];
        expect(putCall).toEqual(`/api/users/${userSub}`);
    });
});
