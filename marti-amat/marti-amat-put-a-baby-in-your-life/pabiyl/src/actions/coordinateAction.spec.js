import dispatcher from '../Dispatcher';
import axios from 'axios';
import { getCoordinates } from './coordinateAction';

jest.dontMock('./coordinateAction');
jest.mock('axios');
jest.mock('../Dispatcher');
describe('Detail action', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    });
    it('should call nominatim api route', async () => {
        const city = "Terrassa";
        axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
        await getCoordinates(city);
        expect(axios.get.mock.calls[0][0]).toEqual('https://nominatim.openstreetmap.org/search?q=Terrassa&format=json');
    });

});