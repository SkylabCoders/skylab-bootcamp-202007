import dispatcher from '../dispatcher';
import landingStore from './landingStore';

import actionTypes from '../actions/actionTypes';

describe('Login Store', () => {
	let action = null;

	it('should create', () => {
		expect(landingStore).toBeTruthy();
	});

	it('should register LOGIN', () => {
		action = {
			type: actionTypes.LOGIN,
			data: 'somedata'
		};
		dispatcher.dispatch(action);

		expect(landingStore.isLogged()).toBe(true);
		expect(landingStore.getUserProfile()).not.toBeUndefined();
	});

	it('should register LOGIN_GITHUB_TOKEN', () => {
		const data = 'code=hg6h8f6g8h687fg68h&something';
		action = {
			type: actionTypes.LOGIN_GITHUB_TOKEN,
			data
		};
		dispatcher.dispatch(action);

		const token = 'hg6h8f6g8h687fg68h';

		expect(landingStore.getGitHubAccessToken()).toBe(token);
	});

	it('should register GET_GITHUB_AUTH_USER', () => {
		action = {
			type: actionTypes.GET_GITHUB_AUTH_USER,
			data: { login: 'userName', bio: 'userBio' }
		};

		dispatcher.dispatch(action);

		expect(landingStore.getGitHubUserName()).toEqual(action.data.login);
		expect(landingStore.getGitHubBio()).toEqual(action.data.bio);
		expect(landingStore.isUserGitHub()).toBe(true);
	});

	it('should register LOGOUT', () => {
		action = {
			type: actionTypes.LOGOUT
		};

		dispatcher.dispatch(action);

		expect(landingStore.isLogged()).toBe(false);
	});

	it('should subscribe to addChangeListener', () => {
		const mockFunct = jest.fn();

		landingStore.addChangeListener(mockFunct);
		landingStore.emitChange();

		expect(mockFunct).toHaveBeenCalled();
	});

	it('should unsubscribe from addChangeListener', () => {
		const mockFunct = jest.fn();

		landingStore.addChangeListener(mockFunct);
		landingStore.emitChange();
		landingStore.removeChangeListener(mockFunct);

		expect(mockFunct).toHaveBeenCalled();
	});

	it('should throw an error given a wrong action type', () => {
		const message = 'The action type WRONG_ACTION is not defined.';
		try {
			action = {
				type: 'WRONG_ACTION'
			};
			dispatcher.dispatch(action);
		} catch (error) {
			expect(error).toEqual(message);
		}
	});
});
