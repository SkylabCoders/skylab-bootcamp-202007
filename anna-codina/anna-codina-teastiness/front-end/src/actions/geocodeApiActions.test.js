import dispatcher from '../Dispatcher';
import Geocode from 'react-geocode';
import { getLocation } from './geocodeApiActions';

jest.mock('react-geocode');
jest.mock('../Dispatcher');
jest.dontMock('./geocodeApiActions');

describe('geocodeApiActions', () => {
  const data = { results: [{ geometry: { location: true } }] };
  const address = 'skylab is my house now';
  afterEach(() => {
    dispatcher.dispatch.mockClear();
    Geocode.fromAddress.mockClear();
  });
  it('should retyrb adress if has no', async () => {
    Geocode.fromAddress.mockReturnValue(
      new Promise((resolve) => resolve(data))
    );
    await getLocation(address);
    expect(Geocode.fromAddress.mock.calls[0][0]).toEqual(address);
  });
  it('should', async () => {
    Geocode.fromAddress.mockReturnValue(
      new Promise((resolve) => resolve(throwError()))
    );
    await getLocation(address);
    expect(Geocode.fromAddress.mock.calls[0][0]).toEqual(address);
  });
});
