import FinderStore from './finderStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

function reduceAction(action, data) {
	return {
		type: action,
		data
	};
}

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

	it('should find results through SEARCH_FINDER', () => {
		const search = 'matrix';
		FinderStore.addChangeListener(myCallbackMockFunction);
		action = reduceAction(actionTypes.SEARCH_FINDER, [{ search }]);
		dispatcher.dispatch(action);
		expect(FinderStore.getFinder()).toEqual(action.data);
	});

	xit('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(FinderStore).toBeFalsy();
		} catch (error) {
			const message = `Unknown action type. action.type: undefined`;
			expect(error).toEqual(message);
		}
	});
});
