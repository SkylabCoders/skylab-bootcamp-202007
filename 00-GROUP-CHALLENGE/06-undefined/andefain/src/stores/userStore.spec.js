import userStore from './userStore';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

describe('UserStore', () => {
	let myCallbackMockFunction;

	beforeEach(() => {
		myCallbackMockFunction = jest.fn();
		userStore.addChangeListener(myCallbackMockFunction);
		userStore.emitChange();
	});

	afterEach(() => {
		userStore.removeChangeListener(myCallbackMockFunction);
	});

	it('Should create', () => {
		expect(myCallbackMockFunction).toHaveBeenCalled();
		expect(myCallbackMockFunction).toHaveBeenCalledTimes(1);
		expect(userStore).toBeDefined();
	});

	it('Should register LIST_FAVORITE_FILMS', () => {
		const data = 'films';
		dispatcher.dispatch({
			type: actionTypes.LIST_FAVORITE_FILMS,
			data
		});
		expect(userStore.getFavoriteFilms()).toEqual(data);
	});
});
