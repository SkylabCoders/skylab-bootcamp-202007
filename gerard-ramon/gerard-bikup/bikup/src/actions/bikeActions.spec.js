import {
	loadUserBikeList,
	loadBikeById,
	loadCompoById,
	createNewBike,
	deleteBike,
	editBike,
	addWorkout,
	loadStravaBikeInfo,
} from './bikeActions';
import dispatcher from '../dispatcher';
import axios from 'axios';

jest.dontMock('./bikeActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Bike Actions', () => {
	let sessionStorageMock = null;
	let actualBike = null;

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
			bikeComponentList: [
				{ compoAccumulatedMeters: 20, compoAccumulatedMinutes: 40 },
				{ compoAccumulatedMeters: 20, compoAccumulatedMinutes: 40 },
			],
		};
		sessionStorage.actualBike = JSON.stringify(actualBike);
		sessionStorage.authUser = JSON.stringify(actualBike);
	});

	it('Should not call axios get if no userId', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve, reject) =>
				resolve({ bikes: [{ bikeName: 'alma' }] })
			)
		);

		await loadUserBikeList();

		const call = axios.get.mock.calls[0];

		expect(call).toBeUndefined();
	});

	it('Should get a bike list from /api/bikes with an userId', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve, reject) =>
				resolve({ bikes: [{ bikeName: 'alma' }] })
			)
		);

		const userId = '51te2s3re1s42r3';
		await loadUserBikeList(userId);

		const call = axios.get.mock.calls[0][0];

		expect(call).toEqual('/api/bikes');
	});

	it('Should get a bike from /api/bikes/:bikeId with an userId', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve, reject) => resolve({ bikeName: 'alma' }))
		);

		const bikeId = '51te2s3re1s42r3';
		await loadBikeById(bikeId);

		const call = axios.get.mock.calls[0][0];

		expect(call).toEqual(`/api/bikes/${bikeId}`);
	});

	it('Should get compo from /api/bikes/:bikeId with an userId', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve, reject) => resolve({ compo: 'chain' }))
		);

		const bikeId = '51te2s3re1s42r3';
		const compoId = '23s4fd5s3f52';
		await loadCompoById(bikeId, compoId);

		const call = axios.get.mock.calls[0][0];

		expect(call).toEqual(`/api/bikes/${bikeId}/${compoId}`);
	});

	it('Should post to /api/crud/bike when creating bike', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => resolve({ bike: 'bike' }))
		);

		const bikeInfo = {
			bike: 'bike',
		};
		await createNewBike(bikeInfo);

		const call = axios.post.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike`);
	});

	it('Should NOT post to /api/crud/bike when creating bike and no authUser', async () => {
		sessionStorage.authUser = null;

		const bikeInfo = {
			bike: 'bike',
		};
		await createNewBike(bikeInfo);

		const call = axios.post.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('Should put to /api/crud/bike/delete when deleting bike', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve('hello'))
		);

		await deleteBike();

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike/delete`);
	});

	it('Should NOT put to /api/crud/bike/delete when deleting bike and no actualBike', async () => {
		sessionStorage.actualBike = null;

		await deleteBike();

		const call = axios.put.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('Should put to /api/crud/bike/edit when deleting bike', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve('hello'))
		);

		const bikeInfo = {
			bike: 'bike',
		};
		await editBike(bikeInfo, true);

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike/edit`);
	});

	it('Should NOT put to /api/crud/bike/edit when deleting bike and no actualBike', async () => {
		sessionStorage.actualBike = null;

		const bikeInfo = {
			bike: 'bike',
		};
		await editBike(bikeInfo, false);

		const call = axios.put.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('Should put to /api/crud/bike/add-workout when deleting bike', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: 'someData' }))
		);
		const updatedBikeValues = {
			bikeTotalMeters: 10,
			bikeTotalMinutes: 10,
			workoutMeters: 20,
			workoutTotalMinutes: 5,
		};
		await addWorkout(updatedBikeValues);

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike/add-workout`);
	});

	it('Should put to /api/crud/bike/add-workout when deleting bike and no data', async () => {
		axios.put.mockReturnValue(
			new Promise((resolve, reject) => resolve({ data: null }))
		);
		const updatedBikeValues = {
			bikeTotalMeters: 10,
			bikeTotalMinutes: 10,
			workoutMeters: 20,
			workoutTotalMinutes: 5,
		};
		await addWorkout(updatedBikeValues);

		const call = axios.put.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike/add-workout`);
	});

	it('Should NOT put to /api/crud/bike/add-workout when deleting bike and no actualBike', async () => {
		sessionStorage.actualBike = null;
		const updatedBikeValues = {
			bikeTotalMeters: 10,
			bikeTotalMinutes: 10,
			workoutMeters: 20,
			workoutTotalMinutes: 5,
		};
		await addWorkout(updatedBikeValues);

		const call = axios.put.mock.calls[0];
		expect(call).toEqual(undefined);
	});

	it('Should post to /api/crud/bike/stravaBikeInfo when loading strava bike info', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) =>
				resolve({ bikelist: { data: 'bikes' } })
			)
		);
		const bikeList = [{}, {}];
		const stravaToken = 'adasdasdasd';
		await loadStravaBikeInfo(bikeList, stravaToken);

		const call = axios.post.mock.calls[0][0];
		expect(call).toEqual(`/api/crud/bike/stravaBikeInfo`);
	});
});
