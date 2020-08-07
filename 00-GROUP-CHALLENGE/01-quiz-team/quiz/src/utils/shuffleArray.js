export default function shuffleArray(arr){
    let res = arr;
    let currentIndex = res.length;

    while(currentIndex > 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        let temporaryValue = res[currentIndex];
        res[currentIndex] = res[randomIndex];
        res[randomIndex] = temporaryValue;
    }
    
    return res;
}