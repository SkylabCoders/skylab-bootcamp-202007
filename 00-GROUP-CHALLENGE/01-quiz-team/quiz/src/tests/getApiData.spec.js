import getApiData from './../getApiData';

describe('Test set to check api calls, getApiData function', ()=>{
    test('Should get an error from an invalid call to API', async() => {
        const data = await getApiData(0,0,0,0,0);
        expect(data).toEqual([]);
    })
});