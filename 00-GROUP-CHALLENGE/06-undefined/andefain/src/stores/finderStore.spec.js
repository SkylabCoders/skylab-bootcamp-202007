import FinderStore from './finderStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

describe('FinderStore', () => {
	let action;
	let myCallbackMockFunction;

	beforeEach(() => {
		myCallbackMockFunction = jest.fn();
		FinderStore.addChangeListener(myCallbackMockFunction);
	});

	afterEach(() => {
		FinderStore.removeChangeListener(myCallbackMockFunction);
	});
	it('should create', () => {
		expect(FinderStore).toBeDefined();
	});

	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(FinderStore).toBeFalsy();
		} catch (error) {
			const message = `Unknown action type. action.type: undefined`;
			expect(error).toEqual(message);
		}
	});
});
