import loadDivers from '../actions/diverActions';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../dispatcher';

jest.dontMock('../actions/diverActions');
jest.mock('axios');
jest.mock('../dispatcher');

describe('Diver Actions', () => {
	afterEach(() => {
		dispatcher.dispatch.mockClear();
	});

	it('should call diver API', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve) => resolve({ data: {} }))
		);
		await loadDivers();
		expect(axios.get.mock.calls[0][0]).toEqual('/api/diver');
	});

	it('should call dispatch with data', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve) => resolve({ data: {} }))
		);
		await loadDivers();
		expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
			actionType: actionTypes.LOAD_DIVER,
			data: {},
		});
	});
});
