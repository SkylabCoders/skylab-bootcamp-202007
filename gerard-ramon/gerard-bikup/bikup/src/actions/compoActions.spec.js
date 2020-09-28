import dispatcher from '../dispatcher';
import axios from 'axios';
import { createNewCompo, resetCompo, deleteCompo } from './compoActions';

jest.dontMock('./compoActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Compo Actions', () => {
	let sessionStorageMock = null;
	let actualBike = null;
	let actualCompo = null;
	afterEach(() => {
		dispatcher.dispatch.mockClear();
		axios.get.mockClear();
		axios.post.mockClear();
		axios.put.mockClear();
	});

	beforeEach(() => {
		sessionStorageMock = (() => {
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

		actualBike = {
			_id: 'a5as4d564as6d',
			bikeTotalMeters: 200,
			bikeTotalMinutes: 22,
			bikeUserId: '23f4hg34s',
			bikeComponentList: [
				{
					_id: '12',
					compoAccumulatedMeters: 20,
					compoAccumulatedMinutes: 40,
				},
				{
					_id: '21',
					compoAccumulatedMeters: 20,
					compoAccumulatedMinutes: 40,
				},
			],
		};

		actualCompo = {
			compoAccumulatedMeters: 20,
			compoAccumulatedMinutes: 30,
			_id: '12',
		};
		sessionStorage.actualBike = JSON.stringify(actualBike);
		sessionStorage.authUser = JSON.stringify(actualBike);
		sessionStorage.actualCompo = JSON.stringify(actualCompo);
	});

	it('should post to /api/crud/compo when creating a new compo', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		const compoInfo = 'someInfo';
		await createNewCompo(compoInfo);

		const call = axios.post.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/compo`);
	});

	it('should NOT post to /api/crud/compo when creating a new compo with no actualBike', async () => {
		sessionStorage.actualBike = null;
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		const compoInfo = 'someInfo';
		await createNewCompo(compoInfo);

		const call = axios.post.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('should put to /api/crud/compo/reset when reseting a compo', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		await resetCompo();

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/compo/reset`);
	});

	it('should NOT put to /api/crud/compo/reset when reseting a compo with no actualCompo', async () => {
		sessionStorage.actualCompo = null;

		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		await resetCompo();

		const call = axios.put.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('should put to /api/crud/compo/delete when deleting a compo', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		await deleteCompo();

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/compo/delete`);
	});

	it('should NOT put to /api/crud/compo/delete when deleting a compo with no actualCompo', async () => {
		sessionStorage.actualCompo = null;

		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);

		await deleteCompo();

		const call = axios.put.mock.calls[0];
		expect(call).toEqual(undefined);
	});
});
