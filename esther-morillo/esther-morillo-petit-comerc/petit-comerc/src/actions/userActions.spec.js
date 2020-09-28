import dispatcher from '../appDispatcher';
import { loadUserBySub, createUser, addProductCart, deleteProductCart } from './userActions';
import axios from 'axios';

jest.dontMock('./userActions');
jest.mock('axios');
jest.mock('../appDispatcher');

describe('User Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });

    it('should call GET', async () => {
        let sub = '123';

        axios.get.mockReturnValue(new Promise((resolve) => resolve(('123'))));
        await loadUserBySub(sub);
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual(`/api/users/?sub=${sub}`);
    });

    it('should call POST', async () => {
        axios.post.mockReturnValue(new Promise((resolve) => resolve(({ userName: 'Bombasto' }))));
        await createUser({ userName: 'Bombasto' });
        const postCall = axios.post.mock.calls[0][0];
        expect(postCall).toEqual('/api/users');
    });

    it('should call PUT for cart for add', async () => {
        const userSub = '0021'
        const product = '12345'
        let user = {
            sub: '0011',
            cart: ['013']
        }

        axios.put.mockReturnValue(new Promise((resolve) => resolve((user.cart[0]))));
        await addProductCart(userSub, product);
        const putCall = axios.put.mock.calls[0][0];
        expect(putCall).toEqual(`/api/users/${userSub}`);
    });

    it('should call PUT for cart for delete', async () => {
        const userSub = '0021'
        const product = '12345'
        let user = {
            sub: '0011',
            cart: ['01']
        }

        axios.put.mockReturnValue(new Promise((resolve) => resolve((user.cart))));
        await deleteProductCart(userSub, product);
        const putCall = axios.put.mock.calls[0][0];
        expect(putCall).toEqual(`/api/products/${userSub}`);
    });
})