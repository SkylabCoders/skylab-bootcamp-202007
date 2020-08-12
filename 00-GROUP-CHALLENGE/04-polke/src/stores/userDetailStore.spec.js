import userDetailStore from '../stores/userDetailStore';
import actionTypes from '../actions/actionTypes';
import { loadRepoList } from '../actions/userDetailActions';
import dispatcher from '../appDispatcher';

describe('UserDetail Store', () => {
	it('should create', () => {
		expect(userDetailStore).toBeDefined();
	});
	fit('should register LOAD_REPO_LIST', () => {
		console.log('I ENTER LOAD REPOS');
		const action = {
			type: 'LOAD_REPO_LIST',
			data: [
				{
					private: true,
					name: 'Dani',
					description: 'This repo has a description.',
					id: 1,
					language: 'Lang. mix',
					lastUpdate: '10/02/2020',
					userName: 'danio'
				}
			]
		};
		dispatcher.dispatch(action);
		expect(userDetailStore.getRepoList()).toBeDefined();
		expect(userDetailStore.getUserInfo()).toEqual(action.data);
	});
	it('should register LOAD_USER_IMG', () => {
		const action = {
			type: actionTypes.LOAD_USER_IMG,
			data: ''
		};
		dispatcher.dispatch(action);
		expect(loadUserImg(githubUserName).toBeUndefined());
	});
	it('should create a new repo', () => {
		const action = {
			type: actionTypes.CREATE_REPO,
			data: ''
		};
		dispatcher.dispatch(action);

		expect(loadRepoList(githubUserName)).toBeUndefined();
	});
	it('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(userDetailStore).toBeFalsy();
		} catch (errorMessage) {
			const message = `the action type is unknown. action.type: undefined`;
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
