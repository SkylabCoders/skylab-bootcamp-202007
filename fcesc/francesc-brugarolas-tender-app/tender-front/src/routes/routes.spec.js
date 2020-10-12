import ROUTES from './ROUTES';

describe('ROUTES test set', () => {

  it('Should be an array', () => {
    expect(ROUTES.constructor === Array).toBe(true);
  })

  it('Should have a length of 5', () => {
    expect(ROUTES.length).toEqual(5);
  })

})