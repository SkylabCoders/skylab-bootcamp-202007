import userDetailStore from '../stores/userDetailStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';
import createRepo from '../actions/userDetailActions';
import landingStore from './landingStore';

describe('UserDetail Store', () => {
	it('should create', () => {
		expect(userDetailStore).toBeDefined();
	});
	it('should register LOAD_REPO_LIST', () => {
		const action = {
			type: actionTypes.LOAD_REPO_LIST,
			data: [
				{
					private: true,
					name: 'Dani',
					description: 'This repo has a description.',
					id: 1,
					language: 'Lang. mix',
					lastUpdate: '10/02/2020',
					userName: 'gerardramonp'
				}
			]
		};
		dispatcher.dispatch(action);
		expect(userDetailStore.getRepoList()).toBeDefined();
	});
	it('should register LOAD_USER_IMG', () => {
		const action = {
			type: actionTypes.LOAD_USER_IMG,
			data: 'somedata'
		};
		dispatcher.dispatch(action);
		expect(userDetailStore.getUserInfo()).toEqual(action.data);
	});
	it('should create a new repo', () => {
		const action = {
			type: actionTypes.CREATE_REPO,
			data: ''
		};
		dispatcher.dispatch(action);

		expect(userDetailStore.getRepoList()).toBeDefined();
	});
	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(userDetailStore).toBeFalsy();
		} catch (errorMessage) {
			const message = `The action type undefined from UserDetail is not defined`;
			expect(errorMessage).toEqual(message);
		}
	});
	it('should subscribe to addChangeListener', () => {
		const mockFunct = jest.fn();
		userDetailStore.addChangeListener(mockFunct);
		userDetailStore.emitChange();
		expect(mockFunct).toHaveBeenCalled();
	});
	it('should unsubscribe from addChangeListener', () => {
		const mockFunct = jest.fn();
		userDetailStore.addChangeListener(mockFunct);
		userDetailStore.emitChange();
		userDetailStore.removeChangeListener(mockFunct);
		expect(mockFunct).toHaveBeenCalled();
	});
});
