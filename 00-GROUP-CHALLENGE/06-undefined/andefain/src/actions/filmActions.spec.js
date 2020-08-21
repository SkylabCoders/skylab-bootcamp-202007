import { sliderData, mostPopularData, comingSoonData } from './filmActions';

import { sliderMock, popularMock, comingMock } from '../mocks/homeMock';
import filmStore from '../stores/filmStore';

describe('Film actions test', () => {
	it('should return slider data', () => {
		sliderData();
		expect(filmStore.getSliderId()).toEqual(sliderMock);
	});
	it('should return most popular data', () => {
		mostPopularData();
		expect(filmStore.getPopularId()).toEqual(popularMock);
	});
	it('should return coming soon data', () => {
		comingSoonData();
		expect(filmStore.getComingsoonId()).toEqual(comingMock);
	});
});
