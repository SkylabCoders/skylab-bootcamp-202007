import {
	loginOrRegisterUserStrava,
	createUserWithMail,
	loginUserWithMail,
	isUserAuthWithToken,
} from './authActions';
import dispatcher from '../dispatcher';
import axios from 'axios';

jest.dontMock('./authActions');
jest.mock('../dispatcher');
jest.mock('axios');

describe('Auth Actions', () => {
	afterEach(() => {
		dispatcher.dispatch.mockClear();
		axios.get.mockClear();
		axios.post.mockClear();
		sessionStorage.authUser = null;
	});

	it('Should post to /api/auth/strava', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => {
				resolve({ Value: 'resolved' });
			})
		);

		const authCode = '3d2s3fdh4s2fd54s34f5d23g';
		await loginOrRegisterUserStrava(authCode);

		const call = axios.post.mock.calls[0][0];

		expect(call).toEqual('/api/auth/strava');
	});

	it('Should post to /api/auth/mail', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => {
				resolve({ Value: 'resolved' });
			})
		);

		const formData = 'random';
		await createUserWithMail(formData);

		const call = axios.post.mock.calls[0][0];

		expect(call).toEqual('/api/auth/mail');
	});

	it('Should get to /api/auth/login/mail', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve, reject) => {
				resolve({ Value: 'resolved' });
			})
		);

		const email = 'mail@mail.com';
		const password = 'random';
		await loginUserWithMail(email, password);

		const call = axios.get.mock.calls[0][0];

		expect(call).toEqual('/api/auth/login/mail');
	});

	it('Should post to /api/auth/check', async () => {
		sessionStorage.authUser = JSON.stringify({ _id: '4324ewwer32qw' });
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => {
				resolve({ Value: 'resolved' });
			})
		);

		await isUserAuthWithToken();

		const call = axios.post.mock.calls[0][0];

		expect(call).toEqual('/api/auth/check');
	});

	it('Should return false if sessionStorage dont have an auth user', async () => {
		const sessionStorageMock = (() => {
			let store = {};

			return {
				getItem(key) {
					return store[key] || null;
				},
				setItem(key, value) {
					store[key] = value.toString();
				},
				removeItem(key) {
					delete store[key];
				},
				clear() {
					store = {};
				},
			};
		})();

		Object.defineProperty(window, 'sessionStorage', {
			value: sessionStorageMock,
		});

		sessionStorage.authUser = null;

		await isUserAuthWithToken();

		const call = axios.post.mock.calls[0];

		expect(call).toEqual(undefined);
	});
});
