import FinderStore from './finderStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

// Different approach with a reducer function
function reduceAction(action, data) {
	return {
		type: action,
		data
	};
}

describe('FinderStore', () => {
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
		dispatcher.dispatch({ type: actionTypes.SEARCH_FINDER, data: search });
		expect(FinderStore.getFinder()).toEqual(search);
		//action = reduceAction(actionTypes.SEARCH_FINDER, [{ search }]);
		//dispatcher.dispatch(action);
		//expect(FinderStore.getFinder()).toEqual(action.data);
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
