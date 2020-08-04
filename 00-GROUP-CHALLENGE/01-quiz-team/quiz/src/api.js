import CONFIG_DATA from './config';
import getEndpoint from './utils/endpoint';

export default async function getApiData(category = 'all', difficulty = 'all', type = 'all', encode='default', amount = 10) {
    const URL = `https://${CONFIG_DATA.HOST}?${getEndpoint(category, difficulty, type, encode, amount)}`;
    try {
      const response = await fetch(URL);
      const apiData = await response.json();
  
      return apiData;
      
    } catch (err) {
      console.log('Fetch failed', err);
    }
}