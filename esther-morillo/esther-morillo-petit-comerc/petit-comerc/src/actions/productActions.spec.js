import dispatcher from '../appDispatcher';
import { loadProducts, createProduct, loadProduct } from './productActions';
import axios from 'axios';

jest.dontMock('./storeActions');
jest.mock('axios');
jest.mock('../appDispatcher');

describe('Product Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });

    it('should call GET', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve(('123'))));
        await loadProducts();
        const getCall = axios.get.mock.calls[0][0];
        expect(getCall).toEqual('/api/products');
    });

    it('should call POST', async () => {
        axios.post.mockReturnValue(new Promise((resolve) => resolve(({ product: 'Camiseta Uep' }))));
        await createProduct({ product: 'Camiseta Uep' });
        const postCall = axios.post.mock.calls[0][0];
        expect(postCall).toEqual('/api/products');
    });

    it('should call POST a product', async () => {
        const urlStoreId = '001'
        const urlProductId = '002'

        axios.post.mockReturnValue(new Promise((resolve) => resolve()));
        await loadProduct((urlStoreId, urlProductId));
        const postCall = axios.post.mock.calls[0][0];
        expect(postCall).toEqual('/api/products');
    });
})

