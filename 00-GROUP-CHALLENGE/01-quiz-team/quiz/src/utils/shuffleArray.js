import { getRandomIntInclusive } from './randomizer';

export default function shuffleArray(arr){
    let res = arr;
    let currentIndex = res.length;

    while(currentIndex > 0){
        let randomIndex = getRandomIntInclusive(0, currentIndex);
        currentIndex -= 1;
        
        let temporaryValue = res[currentIndex];
        res[currentIndex] = res[randomIndex];
        res[randomIndex] = temporaryValue;
    }
    
    return res;
}