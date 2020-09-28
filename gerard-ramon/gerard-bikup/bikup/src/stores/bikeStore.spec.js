import bikeStore from '../stores/bikeStore';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';
import { createNewBike } from '../actions/bikeActions';

jest.mock('../actions/bikeActions');

describe('Bike Store', () => {
	afterEach(() => {
		createNewBike.mockClear();
	});

	it('Should set a bike and get it', () => {
		const bike = {
			bikeId: '6d4fsd34f5s',
			bikeName: 'myBikeName',
		};
		bikeStore.setBikeDetail(bike);

		const bikeDetail = bikeStore.getBikeDetail();

		expect(bikeDetail).toEqual(bike);
	});

	it('Should log an error when action type is wrong', () => {
		const bikeTestName = 'testName';
		dispatcher.dispatch({
			type: 'undefinedAction',
			data: { bikeName: bikeTestName },
		});

		const bike = bikeStore.getBikeDetail();

		expect(bike.bikeName).not.toEqual(bikeTestName);
	});

	it('Should register LOAD_BIKE_BY_ID', () => {
		const bikeTestName = 'testName';
		dispatcher.dispatch({
			type: actionTypes.LOAD_BIKE_BY_ID,
			data: { bikeName: bikeTestName },
		});

		const bike = bikeStore.getBikeDetail();

		expect(bike.bikeName).toEqual(bikeTestName);
	});

	it('Should register LOAD_USER_BIKE_LIST', () => {
		const bikeListTest = [{ bikeName: 'first' }, { bikeName: 'second' }];
		dispatcher.dispatch({
			type: actionTypes.LOAD_USER_BIKE_LIST,
			data: bikeListTest,
		});

		const bikeList = bikeStore.getBikeList();

		expect(bikeList).toEqual(bikeListTest);
	});

	it('should call removeListener and live', () => {
		bikeStore.addChangeListener(() => {});
		bikeStore.removeChangeListener(() => {});

		expect(bikeStore).toBeTruthy();
	});

	it('Should register LOAD_COMPO_BY_ID', () => {
		const compo = {
			compoDisplayName: 'Chain',
		};

		dispatcher.dispatch({
			type: actionTypes.LOAD_COMPO_BY_ID,
			data: compo,
		});

		const compoById = bikeStore.getCompoDetail();

		expect(compoById).toEqual(compo);
	});

	it('Should register CREATE_NEW_BIKE', () => {
		const newBike = {
			bike: 'bike',
		};

		dispatcher.dispatch({
			type: actionTypes.CREATE_NEW_BIKE,
			data: newBike,
		});

		const bike = bikeStore.getNewBike();

		expect(bike).toEqual(newBike);
	});

	it('Should register ADD_WORKOUT', () => {
		const modifiedStatus = true;

		dispatcher.dispatch({
			type: actionTypes.ADD_WORKOUT,
			data: modifiedStatus,
		});

		const modified = bikeStore.isBikeModified();

		expect(modified).toEqual(modifiedStatus);
	});

	it('Should register DELETE_BIKE', () => {
		const modifiedStatus = true;

		dispatcher.dispatch({
			type: actionTypes.DELETE_BIKE,
			data: modifiedStatus,
		});

		const modified = bikeStore.isBikeModified();

		expect(modified).toEqual(modifiedStatus);
	});

	it('Should register ADD_NEW_COMPO', () => {
		const compo = {
			compoDisplayName: 'Chain',
		};

		dispatcher.dispatch({
			type: actionTypes.ADD_NEW_COMPO,
			data: compo,
		});

		const storeCompo = bikeStore.getCompoDetail();

		expect(storeCompo).toEqual(compo);
	});

	it('Should register RESET_COMPO', () => {
		const modifiedStatus = true;

		dispatcher.dispatch({
			type: actionTypes.RESET_COMPO,
			data: modifiedStatus,
		});

		const modified = bikeStore.isCompoModified();

		expect(modified).toEqual(modifiedStatus);
	});

	it('Should register DELETE_COMPO', () => {
		const modifiedStatus = true;

		dispatcher.dispatch({
			type: actionTypes.DELETE_COMPO,
			data: modifiedStatus,
		});

		const modified = bikeStore.isCompoModified();

		expect(modified).toEqual(modifiedStatus);
	});

	it('Should register STRAVA_LOAD_BIKE_LIST_INFO', () => {
		const bikeObject = {
			b123: {
				bikename: 'bike1',
			},
			b456: {
				bikename: 'bike2',
			},
		};

		createNewBike.mockReturnValue('hola');

		dispatcher.dispatch({
			type: actionTypes.STRAVA_LOAD_BIKE_LIST_INFO,
			data: bikeObject,
		});

		const call = createNewBike.mock.calls[0][0];

		expect(call).toEqual(bikeObject.b123);
	});

	it('Should not call createNewBike in STRAVA_LOAD_BIKE_LIST_INFO when no data', () => {
		createNewBike.mockReturnValue('hola');

		dispatcher.dispatch({
			type: actionTypes.STRAVA_LOAD_BIKE_LIST_INFO,
			data: null,
		});

		const call = createNewBike.mock.calls[0];

		expect(call).toEqual(undefined);
	});
});
