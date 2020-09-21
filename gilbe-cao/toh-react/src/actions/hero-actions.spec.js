import dispatcher from '../dispatcher';
import axios from 'axios';
import { saveHero, deleteHero, loadHeroes } from './hero-actions';
import actionTypes from './action-types';

jest.dontMock('./hero-actions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Hero actions', () => {
	afterEach(() => {
		dispatcher.dispatch.mockClear();
	});

	it('should call heroes api route', async () => {
		axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
		await loadHeroes();
		expect(axios.get.mock.calls[0][0]).toEqual('/api/heroes');
	});

	it('shoud call dispatch with data', async () => {
		axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
		await loadHeroes();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			type: 'LOAD_HEROES',
			data: {}
		});
	});

	it('should call post without hero id', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => resolve({ name: 'Bombasto' }))
		);
		await saveHero({ name: 'Bombasto' });
		expect(axios.post.mock.calls[0][0]).toEqual('/api/heroes');
	});

	it('should call post with hero id', async () => {
		axios.post.mockReturnValue(
			new Promise((resolve, reject) => resolve({ name: 'Bombasto', id: 13 }))
		);
		await saveHero({ name: 'Bombasto', id: 13 });
		expect(axios.post.mock.calls[0][0]).toEqual('/api/heroes');
	});

	it('should call delete', async () => {
		const id = 13;
		axios.delete.mockReturnValue(new Promise((resolve) => resolve(id)));
		await deleteHero(id);
		expect(axios.delete.mock.calls.length).toEqual(1);
	});

	it('should call delete', async () => {
		const id = 13;
		axios.delete.mockReturnValue(new Promise((resolve) => resolve(id)));
		await deleteHero(id);
		const dispatchCallback = {
			type: actionTypes.DELETE_HERO,
			data: { id }
		};
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual(dispatchCallback);
	});
});
