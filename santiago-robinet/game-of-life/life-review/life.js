const isAlive = 1;
const isDead = 0;


function Life() {
    function next(initialState) {
        if (!initialState) return;

        let nextState = [];

        for(let rowIndex = 0; rowIndex < initialState.length; rowIndex++){
            
            nextState = [...nextState, ...initialState[rowIndex]];
            
            for(let columnIndex = 0; columnIndex < initialState[rowIndex].length; columnIndex++){
                
                const isCellAlive = initialState[rowIndex][columnIndex] === 1;

                if(isCellAlive){

                } else {
                    const neighbours = 3;
                    nextState[rowIndex][columnIndex] = isAlive;
                };
            }

        }
    }

    return { next };
}

