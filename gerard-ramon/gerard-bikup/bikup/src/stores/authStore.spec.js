import authStore from '../stores/authStore';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

describe('Bike Store', () => {
	it('Should subscribe and unsubscribe to listener', () => {
		authStore.addChangeListener(() => {});
		authStore.removeChangeListener(() => {});

		expect(authStore).toBeTruthy;
	});

	it('Should register LOGIN_USER_STRAVA', () => {
		const username = 'gerard';
		const authUser = {
			username,
			bikeList: [{ bike: 'solde' }],
		};

		dispatcher.dispatch({
			type: actionTypes.LOGIN_USER_STRAVA,
			data: authUser,
		});

		expect(authStore.getAuthUser()).toEqual(authUser);
	});

	it('Should register LOGIN_USER_MAIL', () => {
		const username = 'gerard';
		const authUser = {
			username,
		};

		dispatcher.dispatch({
			type: actionTypes.LOGIN_USER_MAIL,
			data: authUser,
		});

		expect(authStore.getAuthUser()).toEqual(authUser);
	});

	it('Should register CREATE_USER_MAIL', () => {
		const username = 'gerard';
		const authUser = {
			username,
		};

		dispatcher.dispatch({
			type: actionTypes.CREATE_USER_MAIL,
			data: authUser,
		});

		expect(authStore.getAuthUser()).toEqual(authUser);
	});

	it('Should return false if user is user is not auth', () => {
		dispatcher.dispatch({
			type: actionTypes.CHECK_CORRECT_USER,
			data: false,
		});

		expect(authStore.isUserAuth()).toEqual(false);
	});

	it('Should return true if user is user is auth', () => {
		dispatcher.dispatch({
			type: actionTypes.CHECK_CORRECT_USER,
			data: true,
		});

		expect(authStore.isUserAuth()).toEqual(true);
	});

	it('Should not crash if action type is not defined', () => {
		dispatcher.dispatch({
			type: 'notDefinedActionType',
			data: null,
		});

		expect(authStore).toBeTruthy();
	});
});
