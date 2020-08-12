import heroStore from './filmStore';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';
import { sliderMock, popularMock, comingMock } from '../mocks/homeMock';
import filmStore from './filmStore';

function actionCreator(type, data = {}) {
	return { type, data };
}

describe('Film store test', () => {
	let callback = null;
	beforeAll(() => {
		callback = jest.fn();
		filmStore.addChangeListener(callback);
		filmStore.emitChange();
	});
	afterAll(() => {
		filmStore.removeChangeListener(callback);
	});
	it('should create', () => {
		expect(callback).toHaveBeenCalled;
		expect(heroStore).toBeDefined;
	});

	it('should send film slider data', () => {
		const action = actionCreator(actionTypes.SLIDER_FILM, sliderMock);
		dispatcher.dispatch(action);
		expect(filmStore.getSliderId()).toEqual(sliderMock);
	});

	it('should send coming soon data', () => {
		const action = actionCreator(actionTypes.COMING_SOON_FILM, comingMock);
		dispatcher.dispatch(action);
		expect(filmStore.getComingsoonId()).toEqual(comingMock);
	});

	it('should send popular data', () => {
		const action = actionCreator(actionTypes.POPULAR_FILM, popularMock);
		dispatcher.dispatch(action);
		expect(filmStore.getPopularId()).toEqual(popularMock);
	});

	it('should send film component data', () => {
		const data = { title: 'matrix' };
		const action = actionCreator(actionTypes.FILM_DETAILS, data);
		dispatcher.dispatch(action);
		expect(filmStore.getFilmData()).toEqual(data);
	});

	xit('default switch', () => {
		const action = actionCreator('RANDOM_ACTION');
		try {
			dispatcher.dispatch(action);
			expect(filmStore).toBeFalsy();
		} catch (err) {
			const msg = `${action.type} is unknown`;
			expect(err).toEqual(msg);
		}
	});
});
