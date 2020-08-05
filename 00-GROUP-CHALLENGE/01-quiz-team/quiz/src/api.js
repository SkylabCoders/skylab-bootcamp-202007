import CONFIG_DATA from './config';
import getEndpoint from './utils/endpoint';

export default async function getApiData(category = 'all', difficulty = 'all', type = 'all', encode='default', amount = 10) {
    const URL = `https://${CONFIG_DATA.HOST}?${getEndpoint(category, difficulty, type, encode, amount)}`;
    try {
      const response = await fetch(URL);
      const apiData = await response.json();
  
      const result = apiData.results;
      for(let el of result){
        el.question = el.question.replace(/&#039;/g, '\'')
                                .replace(/&quot;/g, '\"')
                                .replace(/&lsquo;/g, '<<')
                                .replace(/&rsquo;/g, '>>');
        el.correct_answer = el.correct_answer.replace(/&#039;/g, '\'')
                                .replace(/&quot;/g, '\"')
                                .replace(/&lsquo;/g, '<<')
                                .replace(/&rsquo;/g, '>>');
        for (let a of el.incorrect_answers){
            a = a.replace(/&#039;/g, '\'')
                    .replace(/&quot;/g, '\"')
                    .replace(/&lsquo;/g, '<<')
                    .replace(/&rsquo;/g, '>>');
        }
      }

      return result;

    } catch (err) {
      console.log('Fetch failed', err);
    }
}