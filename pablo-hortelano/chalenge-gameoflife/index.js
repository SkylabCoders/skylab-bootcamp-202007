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
      row.setAttribute("class", `game-row game-row-${i}`);
      selector.appendChild(row);
      for (let j = 0; j < this.ySize; j++) {
        column = document.createElement("div");
        column.setAttribute("class", `game-column game-row-${i}-column-${j}`);
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
        row: `${i}`,
        elements: [],
      };
      this.state.push(individualObject);
      for (let j = 0; j < this.grid[1]; j++) {
        this.state[i].elements.push({
          column: `${i}`,
          class: `game-row-${i}-column-${j}`,
          live: this.randomLiveOrDead(),
        });
      }
    }
  };
  this.randomLiveOrDead = function () {
    let max = 2;
    let min = 0;
    let binary = Math.floor(Math.random() * (max - min)) + min;
    return binary === 1 ? true : false;
  };
}

function paintInitialBoard(arrayOfObjects) {
  this.arrayOfObjects = arrayOfObjects;
  this.filterLiveCells = function () {
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
    for (let elem of classNamesOfcellsToPaint) {
      let selector = document.querySelector(`.${elem}`);
      let newClass = selector.classList.value;
      newClass = newClass + " paintItInBlack";
      selector.setAttribute("class", newClass);
    }
  };
}

//newBoardSet.state[0].elements.filter(elem => elem.live)

function startGame(rowNumber = 40, columnNumber = 40) {
  var elements = document.getElementsByClassName("game-row");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  let testBoard = new ConstructBoard(rowNumber, columnNumber); //Just require the desire number of rows and columns
  testBoard.createBoard();

  let newBoardSet = new RandomizeGrid(testBoard.grid); //Require and array, the first position of the array is the number of rows, second one number of coumns
  newBoardSet.setInitialLiveCells(); //This method configure which cells have an initial state of live true and wich not
  let blankBoard = new paintInitialBoard(newBoardSet.state); //
  let classNamesOfcellsToPaint = blankBoard.filterLiveCells(); // It returns an array of objects with the class names of cells to paint
  blankBoard.paintRightClasses(classNamesOfcellsToPaint);
}
/*
function makeChanges(selector, ) {
  let selector = document.querySelector(".row-1-column-4")
  selector.setAttribute('class', 'paintItInBlack')
}

function algorithmDance(algorithmType, rounds) {
  
}


document.addEventListener('click', makeChanges)

// WITH CANVAS
/* const drawBoard = (ctx, step) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        ctx.fillStyle = (i + j) & 1 ? "black" : "white";
        ctx.fillRect(j * step, i * step, step, step);
      }
    }
  };
  
  const drawPieces = (ctx, y, color, step) => {
    ctx.fillStyle = color;
    
    for (let i = y; i < 2 * step + y; i += step) {
      for (let j = step / 2; j < 8 * step; j += step) {
        ctx.beginPath();
        ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  };
  
  const step = 60;
  const c = document.createElement("canvas");
  c.height = c.width = step * 8;
  document.body.appendChild(c);
  const ctx = c.getContext("2d");
  
  drawBoard(ctx, step);
  drawPieces(ctx, step, "red", step);
  drawPieces(ctx, step * 7, "blue", step); */

/*
  const drawBoard = (ctx, step) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        ctx.fillStyle = (i + j) & 1 ? "black" : "white"; //Define a red fill-color for the rectangle:
        ctx.fillRect(j * step, i * step, step, step); //fillRect()  de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ).
      }
    }
  };
  
  const drawPieces = (ctx, y, color, step) => {
    ctx.fillStyle = color;
    
    for (let i = y; i < 2 * step + y; i += step) {
      for (let j = step / 2; j < 10 * step; j += step) {
        ctx.beginPath(); //beginPath() del API Canvas 2D comienza una nueva ruta vaciando la lista de sub-rutas
        ctx.arc(j, i - step / 2, step / 3, 0, Math.PI * 2); //The arc() method creates an arc/curve (used to create circles, or parts of circles).
        ctx.fill(); //The fill() method fills the current drawing (path). The default color is black.
      }
    }
  };
  
  const step = 60; //Tamaño
  const c = document.createElement("canvas");
  c.height = c.width = step * 10;
  document.body.appendChild(c);
  const ctx = c.getContext("2d"); //crea un elemento canvas y le da contexto 2d
  
  drawBoard(ctx, step);
  drawPieces(ctx, step, "red", step);
  drawPieces(ctx, step * 9, "blue", step); //Con el step * 10 sleccionasla posición vertical del tablero, si cambias step cambia tamaño de los pixeles
  */
