import authStore from './authStore';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

describe('AuthStore', () => {
	let myCallbackMockFunction;
	beforeAll(() => {
		myCallbackMockFunction = jest.fn();
		authStore.addChangeListener(myCallbackMockFunction);
		authStore.emitChange();
	});
	afterAll(() => {
		authStore.removeChangeListener(myCallbackMockFunction);
	});

	it('Should create', () => {
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
		expect(authStore).toBeDefined();
	});

	it('Should register LOGIN', () => {
		const user = { name: 'Vanesa' };
		dispatcher.dispatch({
			type: actionTypes.LOGIN,
			data: user
		});
		expect(authStore.getUserProfile()).toBe(user);
		expect(authStore.isLogged()).toEqual(true);
	});

	it('Should register LOGOUT', () => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		});
		expect(authStore.isLogged()).toBe(false);
	});

	xit('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(authStore).toBeFalsy();
		} catch (errorMessage) {
			const message = 'The action type is unknown. action.type: undefined';
			expect(errorMessage).toEqual(message);
		}
	});
});
