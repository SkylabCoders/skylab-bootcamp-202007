import diveSiteStore from '../stores/diveSiteStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('DiveSite Store', () => {
	let action;
	let mockCallbackFunction;

	beforeEach(() => {
		mockCallbackFunction = jest.fn();
		diveSiteStore.addChangeListener(mockCallbackFunction);
	});

	afterEach(() => {
		diveSiteStore.removeChangeListener(mockCallbackFunction);
	});

	it('should exist', () => {
		expect(diveSiteStore).toBeDefined();
	});

	it('should load dive sites', () => {
		action = {
			type: actionTypes.LOAD_DIVESITE,
			data: {
				name: 'El Gat',
				location: 'Roses, Spain',
			},
		};
		dispatcher.dispatch(action);
		expect(diveSiteStore.getDiveSites()).toEqual(action.data);
	});

	it('should use the default case when the actionType doesnt exist', () => {
		action = {
			actionType: actionTypes.RUN_USER,
			data: { name: 'Pepito', location: 'Grillo' },
		};
		dispatcher.dispatch(action);
		expect(diveSiteStore).toBeTruthy();
	});

	it('should return a dive site', () => {
		action = {
			type: actionTypes.LOAD_DIVESITE,
			data: [{ _id: 1234 }],
		};
		dispatcher.dispatch(action);
		expect(diveSiteStore.getDiveSiteById(1234)).toEqual({
			_id: 1234,
		});
	});
});
