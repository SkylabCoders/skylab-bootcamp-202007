import dispatcher from '../dispatcher';
import axios from 'axios';
import diveSiteActions from '../actions/diveSiteActions';

jest.dontMock('../actions/diveSiteActions');
jest.mock('axios');
jest.mock('../dispatcher.js');

describe('Dive Site Actions', () => {
	afterEach(() => {
		dispatcher.dispatch.mockClear();
	});

	it('should call dive site API', async () => {
		axios.get.mockReturnValue(
			new Promise((resolve) => resolve({ data: {} }))
		);
		await diveSiteActions();
		expect(axios.get.mock.calls[0][0]).toEqual('/api/dive-sites');
	});
});
