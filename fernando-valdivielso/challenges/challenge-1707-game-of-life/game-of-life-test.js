function changeArray(game, elements) {

    let rowCount = 0;
    let columnCount = 0;
    let changedGame = game;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === (rowCount + '-' + columnCount)) {
            changedGame[rowCount][columnCount] = true;

        }
        columnCount++;

        if (columnCount === column) {
            rowCount++;
            columnCount = 0;
        }
    }
    console.log('changed game' + changedGame);
    secondState = changedGame;
    return changedGame;
}

function revertArray(changedGame, elements) {
    let rowCount = 0;
    let columnCount = 0;
    let secondState = changedGame;

    for (let i = 0; i < seconState.length; i++) {
        for (let j = 0; j < secondState[i].length; j++) {
            let index = i + j;
            if (secondState [i][j] === true) {
                let id = i + '-' + j;
                elements[index].id(id);  
            }
            
        }        
    }
}