import CONFIG_DATA from './config';
import getEndpoint from './utils/endpoint';
import decodeFast from './utils/simpleDecoder';

export default async function getApiData(category = 'all', difficulty = 'all', type = 'all', encode='default', amount = 10) {
    const URL = `https://${CONFIG_DATA.HOST}?${getEndpoint(category, difficulty, type, encode, amount)}`;
    try {
      const response = await fetch(URL);
      const apiData = await response.json();
  
      const result = apiData.results;
      for(let el of result){
        el.question = decodeFast(el.question);
        el.correct_answer = decodeFast(el.correct_answer);
        for (let a of el.incorrect_answers){
            a = decodeFast(a);
        }
      }

      return result;

    } catch (err) {
      console.log('Fetch failed', err);
    }
}