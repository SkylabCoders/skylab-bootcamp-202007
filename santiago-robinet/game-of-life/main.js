// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

let lastStageArray = [];

let binkerStage1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let binkerStage2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function itsAlive(position, neighbourFn) {
    if (position === 1 && neighbourFn < 2) {
        return 0;
    } else if (position === 1 && (neighbourFn === 2 || neighbourFn === 3)) {
        return position;
    } else if (position === 1 && neighbourFn > 3) {
        return 0;
    } else if (position === 0 && neighbourFn === 3) {
        return 1;
    }
    return position;
}


function checkNeighbour(arrayMatrix, firstIndex, secondIndex) {
    neighbourCount = 0;


    // ---IZQ---
    if (arrayMatrix[firstIndex][secondIndex - 1] === 1) {
        neighbourCount++;
    };
    // ---DERECHA---
    if (arrayMatrix[firstIndex][secondIndex + 1] === 1) {
        neighbourCount++;
    };
    // ---ARRIBA IZQ---
    if (arrayMatrix[firstIndex - 1][secondIndex - 1] === 1) {
        neighbourCount++;
    };
    // ---ARRIBA DERECHA---
    if (arrayMatrix[firstIndex - 1][secondIndex + 1] === 1) {
        neighbourCount++;
    };
    // ---ABAJO IZQ---
    if (arrayMatrix[firstIndex + 1][secondIndex - 1] === 1) {
        neighbourCount++;
    };

    // ---ABAJO DERECHA---
    if (arrayMatrix[firstIndex + 1][secondIndex + 1] === 1) {
        neighbourCount++;
    };
    // ---ABAJO---
    if (arrayMatrix[firstIndex + 1][secondIndex] === 1) {
        neighbourCount++;
    };
    // ---ARRIBA---
    if (arrayMatrix[firstIndex - 1][secondIndex] === 1) {
        neighbourCount++;
    };

    return neighbourCount;
}

function initializer(first) {
    let lastStage = [];
    for (let i = 0; i < first.length; i++) {
        lastStage = [...lastStage, [...first[i]]];
    }
    return lastStage;
}


function startGame(firstStageArray, secondStageArray) {

    secondStageArray = initializer(firstStageArray);

    for (let i = 1; i < firstStageArray.length - 1; i++) {
        for (let u = 1; u < firstStageArray[i].length - 1; u++) {
            let counter = checkNeighbour(firstStageArray, i, u);
            let test = itsAlive(firstStageArray[i][u], counter);


            secondStageArray[i][u] = test;

        };
    };
    printAray(secondStageArray)
}

binkerStage2=startGame(binkerStage1);


let element = document.querySelector(".main__container");

element.addEventListener("click", function (event) {
    if (element.className === "black__element") {
        event.target.classList.remove("black__element");
    } else {
        event.target.classList.add("black__element");
    }
})

let objArray = document.querySelectorAll(".grid__element");


function infoTransfer() {
    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].className === "grid__element black__element") {
            lastStageArray.push(1);
        } else {
            lastStageArray.push(0);
        };
    };
    console.log(lastStageArray);
}




function printAray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}





function printGrid(row, col){
    for(let i=0; i < row; i++ ){
        let divRowContainer = document.createElement("div");
        divRowContainer.setAttribute("id", `container__row${i}`);
        for(let u=0; u < col; u++ ){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid__element");
            divRowContainer.appendChild(gridSquare);
        };

        document.getElementById("main__container").appendChild(divRowContainer);
    };
}