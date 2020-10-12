import getHeaders from './getHeaders';

describe('GET HEADERS function test set', () => {

  it('Should return a header', () => {
    const TOKEN = 'some random token string';
    const PREFIX = 'Bearer ';
    
    const testResult = getHeaders();
    const testPattern = testResult.Authorization.slice(0,7);

    expect(testResult).toHaveProperty('Authorization');
    expect(testPattern).toEqual('Bearer ');
  })

})