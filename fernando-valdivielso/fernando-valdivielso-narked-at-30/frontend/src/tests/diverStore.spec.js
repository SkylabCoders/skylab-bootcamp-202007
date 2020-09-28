import diverStore from '../stores/diverStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('Diver Store', () => {
	let action;
	let mockCallbackFunction;

	beforeEach(() => {
		mockCallbackFunction = jest.fn();
		diverStore.addChangeListener(mockCallbackFunction);
	});

	afterEach(() => {
		diverStore.removeChangeListener(mockCallbackFunction);
	});

	it('should exist', () => {
		expect(diverStore).toBeDefined();
	});

	it('should load diver', () => {
		action = {
			actionType: actionTypes.LOAD_DIVER,
			data: { firstName: 'Pepito', lastName: 'Grillo' },
		};
		dispatcher.dispatch(action);
		expect(diverStore.getDivers()).toEqual(action.data);
	});

	it('should use the default case when the actionType doesnt exist', () => {
		action = {
			actionType: actionTypes.RUN_USER,
			data: { firstName: 'Pepito', lastName: 'Grillo' },
		};
		dispatcher.dispatch(action);
		expect(diverStore).toBeTruthy();
	});

	it('should return a diver', () => {
		action = {
			actionType: actionTypes.LOAD_DIVER,
			data: [{ _id: 1234 }],
		};
		dispatcher.dispatch(action);
		expect(diverStore.getDiverById(1234)).toEqual({
			_id: 1234,
		});
	});
});
