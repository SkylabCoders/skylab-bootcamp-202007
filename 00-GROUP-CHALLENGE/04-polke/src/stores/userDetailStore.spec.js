import userDetailStore from '../stores/userDetailStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

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
					userName: 'danio'
				}
			]
		};
		dispatcher.dispatch(action);
		expect(userDetailStore.getRepoList()).toBeDefined();
		expect(userDetailStore.getUserInfo()).toEqual(action.data);
	});
	xit('should register LOAD_USER_IMG', () => {
		const action = {
			type: actionTypes.LOAD_USER_IMG,
			data: ''
		};
		dispatcher.dispatch(action);
		expect(loadUserImg(githubUserName).toBeUndefined());
	});
	xit('should create a new repo', () => {
		const action = {
			type: actionTypes.CREATE_REPO,
			data: ''
		};
		dispatcher.dispatch(action);

		expect(loadRepoList(githubUserName)).toBeUndefined();
	});
	xit('should handle default case for action types', () => {
		try {
			dispatcher.dispatch({});
			expect(userDetailStore).toBeFalsy();
		} catch (error) {
			const message = 'The action type undefined is not defined.';
			expect(error).toEqual(message);
		}
	});
	xit('should subscribe to addChangeListener', () => {
		const mockFunct = jest.fn();
		userDetailStore.addChangeListener(mockFunct);
		userDetailStore.emitChange();
		expect(mockFunct).toHaveBeenCalled();
	});
	xit('should unsubscribe from addChangeListener', () => {
		const mockFunct = jest.fn();
		userDetailStore.addChangeListener(mockFunct);
		userDetailStore.emitChange();
		userDetailStore.removeChangeListener(mockFunct);
		expect(mockFunct).toHaveBeenCalled();
	});
});
