function Game() {

    this.initialState = [];
    this.secondState = [];
    this.selectedCell = [];

    // Generates the game board with the parameters recieved
    this.createGameBoard = function(rows, columns) {

        for (let i = 0; i < rows; i++) {
            let tempArray = [];
            for (let j = 0; j < columns; j++) {
                tempArray.push(0);
            }
            this.initialState.push(tempArray);
        }

        for (let i = 0; i < rows; i++) {
            let tempArray = []
            for (let j = 0; j < columns; j++) {
                tempArray.push(0);
            }
            this.secondState.push(tempArray);
        }
    }

    // Check the number of living neighbours of a cell
    this.checkNeighbours = function(row, col) {
        console.log('I do neighbours');

        let livingNeighbours = 0;
        for (let i = 0; i < 3; i++) {
            try {
                for (let j = 0; j < 3; j++) {
                    if (this.initialState[row - (i - 1)][col - (j - 1)] === 1) {
                        livingNeighbours++;
                    }
                }
            } catch {}
        }
        if (this.initialState[row][col] === 1) {
            livingNeighbours--;
        }
        return livingNeighbours;
    }

    this.applyRulesToCells = function() {
        console.log('I do rules');
        let livingNeighbours;
        for (let i = 0; i < this.initialState.length; i++) {
            for (let j = 0; j < this.initialState[i].length; j++) {
                livingNeighbours = this.checkNeighbours(i, j);
                if (this.initialState[i][j] === 1 && (livingNeighbours === 2 || livingNeighbours === 3)) {
                    this.setCellValue(i, j, 1);
                } else if (this.initialState[i][j] === 0 && livingNeighbours === 3) {
                    this.setCellValue(i, j, 1);
                } else {
                    this.setCellValue(i, j, 0);
                }
            }
        }
        [this.initialState, this.secondState] = [this.secondState, this.initialState];
        //this.printTable(this.secondState);
        //this.resetSecondState();
        return this.secondState;
    }

    this.setCellValue = function(row, col, value) {
        this.secondState[row][col] = value;
    }

    this.resetInitialState = function() {
        for (let i = 0; i < this.initialState.length; i++) {
            for (let j = 0; j < this.initialState[i].length; j++) {
                this.initialState[i][j] = 0;
            }
        }
        return this.initialState;
    }

    this.resetSecondState = function() {
        for (let i = 0; i < this.secondState.length; i++) {
            for (let j = 0; j < this.secondState[i].length; j++) {
                this.secondState[i][j] = 0;
            }
        }
        return this.secondState;
    }

    // Create the table in the DOM
    this.createBoardInDOM = function(rows, columns, gameObj) {
        let mainSection = document.querySelector(".main");
        let gameContainer = document.querySelector(".game-container");
        gameContainer.remove();
        let gameContainer2 = document.createElement("div");
        gameContainer2.classList.add("game-container");
        for (let i = 0; i < rows; i++) {
            let tempRowDiv = document.createElement("div");
            tempRowDiv.classList.add(`game-container__r${i + 1}`, "row");
            for (let j = 0; j < columns; j++) {
                let tempCell = document.createElement("div");
                tempCell.classList.add(`r${i + 1}__c${j + 1}`, "cell");
                tempCell.addEventListener('click', function(event) {
                    gameObj.changeCellPositionValue(tempCell, gameObj);
                });
                tempRowDiv.appendChild(tempCell);
            }
            gameContainer2.appendChild(tempRowDiv)
        }
        mainSection.appendChild(gameContainer2);
    }

    this.changeCellPositionValue = function(cell, gameObj) {
        let cellClassName = cell.className;
        let cellRow = gameObj.obtainPositionFromClassName(cellClassName.split('_')[0]);
        let cellCol = gameObj.obtainPositionFromClassName(cellClassName.split('_')[2]);
        if (gameObj.initialState[cellRow - 1][cellCol - 1] === 0) {
            gameObj.initialState[cellRow - 1][cellCol - 1] = 1;
            cell.style.backgroundColor = liveCellColorEvolution[liveCellColor];
        } else {
            gameObj.initialState[cellRow - 1][cellCol - 1] = 0;
            cell.style.backgroundColor = deadCellColor;
        }
    }

    this.obtainPositionFromClassName = function(className) {
        let result = '';
        for (let i = 0; i < className.length; i++) {
            switch (className[i]) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    result += className[i];
            }
        }
        return result;
    }

    //Print the recieved game board to DOM
    this.printTable = function printTable(table) {
        let currentCell = '';
        let tempHTMLCell = null;
        for (let i = 0; i < table[0].length; i++) {
            for (let j = 0; j < table.length; j++) {
                currentCell = `.r${i + 1}__c${j + 1}`;
                tempHTMLCell = document.querySelector(currentCell)
                if (table[i][j] === 0) {
                    tempHTMLCell.style.backgroundColor = deadCellColor;
                } else {
                    tempHTMLCell.style.backgroundColor = liveCellColorEvolution[liveCellColor];
                }
            }
        }
    }
}