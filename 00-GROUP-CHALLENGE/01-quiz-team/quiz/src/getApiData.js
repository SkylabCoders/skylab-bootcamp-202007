import CONFIG_DATA from './config/CONFIG_DATA';
import getEndpoint from './utils/getEndPoint';
import simpleDecoder from './utils/simpleDecoder';

export default async function getApiData(category = 'all', difficulty = 'all', type = 'all', encode='default', amount = 10) {
    const URL = `https://${CONFIG_DATA.HOST}?${getEndpoint(category, difficulty, type, encode, amount)}`;
    try {
      const response = await fetch(URL);
      const apiData = await response.json();
  
      const result = apiData.results;
      for(let el of result){
        el.question = simpleDecoder(el.question);
        el.correct_answer = simpleDecoder(el.correct_answer);
        for (let i = 0; i < el.incorrect_answers.length; i++){
          el.incorrect_answers[i] = simpleDecoder(el.incorrect_answers[i]);
        }
      }

      return result;

    } catch (err) {
      console.log('Fetch failed', err);
    }
}