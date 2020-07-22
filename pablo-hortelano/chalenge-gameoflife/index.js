function ConstructBoard(ySize, xSize) {
  this.ySize = ySize;
  this.xSize = xSize;
  this.grid = [this.ySize, this.xSize];
  this.createBoard = function () {
    let selector;
    let row;
    for (let i = 0; i < this.ySize; i++) {
      let column;
      let rowSelector;
      selector = document.querySelector(".mainContainer");
      row = document.createElement("section");
      row.setAttribute("class", `game-row game-row-${i}`); //Giving each row two classNames
      selector.appendChild(row);
      for (let j = 0; j < this.ySize; j++) {
        column = document.createElement("div");
        column.setAttribute("class", `game-column game-row-${i}-column-${j}`); //Giving each cell two classNames
        rowSelector = document.querySelector(`.game-row-${i}`);
        rowSelector.appendChild(column);
      }
    }
  };
}

function RandomizeGrid(testBoard) {
  this.grid = testBoard;
  this.state = [];
  this.setInitialLiveCells = function () {
    for (let i = 0; i < this.grid[0]; i++) {
      let individualObject = {};
      individualObject = {
        //Defining the object row that contains all the object-columns
        row: `${i}`,
        elements: [],
      };
      this.state.push(individualObject);
      for (let j = 0; j < this.grid[1]; j++) {
        this.state[i].elements.push({
          //Defining each individual cell of each row and giving them some properties
          column: `${i}`,
          class: `game-row-${i}-column-${j}`,
          liveCelssAround: 0,
          live: this.randomLiveOrDead(), //Random function to determine if the cell is alive or not
        });
      }
    }
  };
  this.randomLiveOrDead = function () {
    //Change this method code to alter proportion of live cells in the board
    let max = 5;
    let min = 0;
    let binary = Math.floor(Math.random() * (max - min)) + min;
    return binary === 1 ? true : false;
  };
}

function paintInitialBoard(arrayOfObjects) {
  this.arrayOfObjects = arrayOfObjects;
  this.filterLiveCells = function () {
    //This method take an array of all the elements and return just an array of classNames
    let newRow;
    let temporalArr = [];
    let definitiveArr = [];
    for (let i = 0; i < this.arrayOfObjects.length; i++) {
      newRow = this.arrayOfObjects[i].elements;
      temporalArr.push(newRow.filter((elem) => elem.live));
    }
    for (let i = 0; i < temporalArr.length; i++) {
      for (let element of temporalArr[i]) {
        definitiveArr.push(element.class);
      }
    }
    return definitiveArr;
  };
  this.paintRightClasses = function (classNamesOfcellsToPaint) {
    //This method take an array of classNames, search for the elements with these classNames and paint them
    for (let elem of classNamesOfcellsToPaint) {
      let selector = document.querySelector(`.${elem}`);
      let newClass = selector.classList.value;
      newClass = newClass + " paintItInBlack";
      selector.setAttribute("class", newClass);
    }
  };
}

function setGame() {
  //Set the game and call start game passing an object as parameter
  let rowNumber = document.querySelector("#number-rows").value;
  let columnNumber = document.querySelector("#number-columns").value;
  if ((rowNumber || columnNumber) >= 41 || (rowNumber || columnNumber) === "") {
    rowNumber = 40;
    columnNumber = 40;
  }
  document.querySelector(".game-text").textContent = "Round nº";

  let elements = document.getElementsByClassName("game-row");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  } //This while delete the previous board (if there are a previous one)
  let testBoard = new ConstructBoard(rowNumber, columnNumber); //Just require the desire number of rows and columns
  testBoard.createBoard();
  let newBoardSet = new RandomizeGrid(testBoard.grid); //Require and array, the first position of the array is the number of rows, second one number of coumns
  newBoardSet.setInitialLiveCells(); //This method configure which cells have an initial state of live true and wich not
  let blankBoard = new paintInitialBoard(newBoardSet.state); //
  let classNamesOfcellsToPaint = blankBoard.filterLiveCells(); // It returns an array of classNames of cells that are alive
  blankBoard.paintRightClasses(classNamesOfcellsToPaint); //Send the list of classNames of cells that are live and paint them

  startGame(newBoardSet, testBoard.grid[0]);
}

function startGame(testBoard, maxSize) {
  document.querySelector(".game-text").textContent = `Round nº ${0}`;
  let state = testBoard.state;
  let i = 0;
  console.log(state);

  let myLoop = function () {
    setTimeout(function () {
      i++;
      if (i < 2) {
        document.querySelector(".game-text").textContent = `Round nº ${i}`;
        (function recalculateNumberOfCellsAlive() {
          for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state[i].elements.length; j++) {
              setGridToCalculateLifes(state, i, j, 2);
            }
          }
        })();

        myLoop();
      }
    }, 1000);
  };

  myLoop();
}

function setGridToCalculateLifes(state, i, j, maxSize) {
  let upper,
    upperLeft,
    upperRight,
    left,
    right,
    bottom,
    bottomLeft,
    bottomRight;
  let emptyArr = [];
  let cont = 0;

  if ((i === 0) & (j === 0)) {
    right = state[i].elements[j + 1].live;
    emptyArr.push(right);
    bottom = state[i + 1].elements[j].live;
    emptyArr.push(bottom);
    bottomRight = state[i + 1].elements[j + 1].live;
    emptyArr.push(bottomRight);
  } /* else if (i === 0 && j === maxSize) {
      left = state[i].elements[j - 1].live;
      bottom = state[i + 1].elements[j].live;
      bottomLeft = state[i + 1].elements[j - 1];
  } else if (i === maxSize && j === 0) {
      upper = state[i - 1].elements[j].live;
      upperRight = state[i - 1].elements[j + 1].live;
      right = state[i].elements[j + 1];
  } else if (i === maxSize && j === maxSize) {
      upper = state[i - 1].elements[j].live;
      upperLeft = state[i - 1].elements[j - 1].live;
      left = state[i].elements[j - 1].live;
  } else {
      upperLeft = state[i - 1].elements[j - 1].live;
      upper = state[i - 1].elements[j].live;
      upperRight = state[i - 1].elements[j + 1].live;
      left = state[i].elements[j - 1].live;
      right = state[i].elements[j + 1].live;
      bottomLeft = state[i + 1].elements[j - 1].live;
      bottom = state[i + 1].elements[j].live;
      bottomRight = state[i + 1].elements[j + 1].live;
  } */
  for (let boolean of emptyArr) {
    if (boolean === true) {
      cont++;
    }
  }
  state[i].elements[j].liveCelssAround = cont;
}
