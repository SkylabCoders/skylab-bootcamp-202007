import dispatcher from '../Dispatcher';
import axios from 'axios';
import { loadEmails, saveEmail } from './emailActions';
import actionTypes from './actionTypes';
jest.dontMock('./emailActions');
jest.mock('axios');
jest.mock('../Dispatcher');

describe('Email action', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call email api route', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await loadEmails();
        expect(axios.get.mock.calls[0][0]).toEqual('/api/email/');
    });
    it('should call email api route', async () => {
        const email = "Pepe";
        axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await saveEmail(email);
        expect(axios.post.mock.calls[0][0]).toEqual('/api/email');
    });

});