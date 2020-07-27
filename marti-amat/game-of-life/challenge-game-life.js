"use strict";

function Position(id, color) {
  this.id = id;
  this.color = color;
}
let column1 = [
  new Position("f1c1", 0),
  new Position("f1c2", 0),
  new Position("f1c3", 0),
  new Position("f1c4", 0),
  new Position("f1c5", 0),
  new Position("f1c6", 0),
  new Position("f1c7", 0),
  new Position("f1c8", 0),
  new Position("f1c9", 0),
  new Position("f1c10", 0),
];
let column2 = [
  new Position("f2c1", 0),
  new Position("f2c2", 0),
  new Position("f2c3", 0),
  new Position("f2c4", 0),
  new Position("f2c5", 0),
  new Position("f2c6", 0),
  new Position("f2c7", 0),
  new Position("f2c8", 0),
  new Position("f2c9", 0),
  new Position("f2c10", 0),
];
let column3 = [
  new Position("f3c1", 0),
  new Position("f3c2", 0),
  new Position("f3c3", 0),
  new Position("f3c4", 1),
  new Position("f3c5", 0),
  new Position("f3c6", 0),
  new Position("f3c7", 0),
  new Position("f3c8", 0),
  new Position("f3c9", 0),
  new Position("f3c10", 0),
];
let column4 = [
  new Position("f4c1", 0),
  new Position("f4c2", 0),
  new Position("f4c3", 1),
  new Position("f4c4", 0),
  new Position("f4c5", 0),
  new Position("f4c6", 1),
  new Position("f4c7", 0),
  new Position("f4c8", 0),
  new Position("f4c9", 0),
  new Position("f4c10", 0),
];
let column5 = [
  new Position("f5c1", 0),
  new Position("f5c2", 0),
  new Position("f5c3", 1),
  new Position("f5c4", 0),
  new Position("f5c5", 0),
  new Position("f5c6", 1),
  new Position("f5c7", 0),
  new Position("f5c8", 0),
  new Position("f5c9", 0),
  new Position("f5c10", 0),
];
let column6 = [
  new Position("f6c1", 0),
  new Position("f6c2", 0),
  new Position("f6c3", 0),
  new Position("f6c4", 0),
  new Position("f6c5", 1),
  new Position("f6c6", 0),
  new Position("f6c7", 0),
  new Position("f6c8", 0),
  new Position("f6c9", 0),
  new Position("f6c10", 0),
];
let column7 = [
  new Position("f7c1", 0),
  new Position("f7c2", 0),
  new Position("f7c3", 0),
  new Position("f7c4", 0),
  new Position("f7c5", 0),
  new Position("f7c6", 0),
  new Position("f7c7", 0),
  new Position("f7c8", 0),
  new Position("f7c9", 0),
  new Position("f7c10", 0),
];
let column8 = [
  new Position("f8c1", 0),
  new Position("f8c2", 0),
  new Position("f8c3", 0),
  new Position("f8c4", 0),
  new Position("f8c5", 0),
  new Position("f8c6", 0),
  new Position("f8c7", 0),
  new Position("f8c8", 0),
  new Position("f8c9", 0),
  new Position("f8c10", 0),
];
let column9 = [
  new Position("f9c1", 0),
  new Position("f9c2", 0),
  new Position("f9c3", 0),
  new Position("f9c4", 0),
  new Position("f9c5", 0),
  new Position("f9c6", 0),
  new Position("f9c7", 0),
  new Position("f9c8", 0),
  new Position("f9c9", 0),
  new Position("f9c10", 0),
];
let column10 = [
  new Position("f10c1", 0),
  new Position("f10c2", 0),
  new Position("f10c3", 0),
  new Position("f10c4", 0),
  new Position("f10c5", 0),
  new Position("f10c6", 0),
  new Position("f10c7", 0),
  new Position("f10c8", 0),
  new Position("f10c9", 0),
  new Position("f10c10", 0),
];
let initialState = [
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  column8,
  column9,
  column10,
];

let column1F = [
  new Position("f1c1", 0),
  new Position("f1c2", 0),
  new Position("f1c3", 0),
  new Position("f1c4", 0),
  new Position("f1c5", 0),
  new Position("f1c6", 0),
  new Position("f1c7", 0),
  new Position("f1c8", 0),
  new Position("f1c9", 0),
  new Position("f1c10", 0),
];
let column2F = [
  new Position("f2c1", 0),
  new Position("f2c2", 0),
  new Position("f2c3", 0),
  new Position("f2c4", 0),
  new Position("f2c5", 0),
  new Position("f2c6", 0),
  new Position("f2c7", 0),
  new Position("f2c8", 0),
  new Position("f2c9", 0),
  new Position("f2c10", 0),
];
let column3F = [
  new Position("f3c1", 0),
  new Position("f3c2", 0),
  new Position("f3c3", 0),
  new Position("f3c4", 0),
  new Position("f3c5", 0),
  new Position("f3c6", 0),
  new Position("f3c7", 0),
  new Position("f3c8", 0),
  new Position("f3c9", 0),
  new Position("f3c10", 0),
];
let column4F = [
  new Position("f4c1", 0),
  new Position("f4c2", 0),
  new Position("f4c3", 0),
  new Position("f4c4", 0),
  new Position("f4c5", 0),
  new Position("f4c6", 0),
  new Position("f4c7", 0),
  new Position("f4c8", 0),
  new Position("f4c9", 0),
  new Position("f4c10", 0),
];
let column5F = [
  new Position("f5c1", 0),
  new Position("f5c2", 0),
  new Position("f5c3", 0),
  new Position("f5c4", 0),
  new Position("f5c5", 0),
  new Position("f5c6", 0),
  new Position("f5c7", 0),
  new Position("f5c8", 0),
  new Position("f5c9", 0),
  new Position("f5c10", 0),
];
let column6F = [
  new Position("f6c1", 0),
  new Position("f6c2", 0),
  new Position("f6c3", 0),
  new Position("f6c4", 0),
  new Position("f6c5", 0),
  new Position("f6c6", 0),
  new Position("f6c7", 0),
  new Position("f6c8", 0),
  new Position("f6c9", 0),
  new Position("f6c10", 0),
];
let column7F = [
  new Position("f7c1", 0),
  new Position("f7c2", 0),
  new Position("f7c3", 0),
  new Position("f7c4", 0),
  new Position("f7c5", 0),
  new Position("f7c6", 0),
  new Position("f7c7", 0),
  new Position("f7c8", 0),
  new Position("f7c9", 0),
  new Position("f7c10", 0),
];
let column8F = [
  new Position("f8c1", 0),
  new Position("f8c2", 0),
  new Position("f8c3", 0),
  new Position("f8c4", 0),
  new Position("f8c5", 0),
  new Position("f8c6", 0),
  new Position("f8c7", 0),
  new Position("f8c8", 0),
  new Position("f8c9", 0),
  new Position("f8c10", 0),
];
let column9F = [
  new Position("f9c1", 0),
  new Position("f9c2", 0),
  new Position("f9c3", 0),
  new Position("f9c4", 0),
  new Position("f9c5", 0),
  new Position("f9c6", 0),
  new Position("f9c7", 0),
  new Position("f9c8", 0),
  new Position("f9c9", 0),
  new Position("f9c10", 0),
];
let column10F = [
  new Position("f10c1", 0),
  new Position("f10c2", 0),
  new Position("f10c3", 0),
  new Position("f10c4", 0),
  new Position("f10c5", 0),
  new Position("f10c6", 0),
  new Position("f10c7", 0),
  new Position("f10c8", 0),
  new Position("f10c9", 0),
  new Position("f10c10", 0),
];
let nextState = [
  column1F,
  column2F,
  column3F,
  column4F,
  column5F,
  column6F,
  column7F,
  column8F,
  column9F,
  column10F,
];
function Game_life() {
  this.paint_boxes = function (array) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (array[j][i].color === 1) {
          console.log(array[j][i].id);
          document.getElementById(array[j][i].id).style.backgroundColor =
            "white";
        } else {
          document.getElementById(array[j][i].id).style.backgroundColor =
            "black";
        }
      }
    }
  };
  this.game_life = function (state) {
    console.log("state !!!!!!!!!!!!!" + state[4][3].color);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (state[j][i].color === 0) {
          nextState[j][i].color = this.check_neighbours(0, j, i);
        } else {
          nextState[j][i].color = this.check_neighbours(1, j, i);
        }
      }
    }

    //setInterval(this.game_life(this.nextState),2000);

    // return this.nextState;
    this.paint_boxes(nextState);
    return nextState;
  };
  this.check_neighbours = function (a, f, c) {
    var index = 0;
    var response = 0;
    if (f < 9 && initialState[f + 1][c].color === 1) {
      index++;
    }
    if (c < 9 && f < 9 && initialState[f + 1][c + 1].color === 1) {
      index++;
    }
    if (c < 9 && initialState[f][c + 1].color === 1) {
      index++;
    }
    if (c < 9 && f > 0 && initialState[f - 1][c + 1].color === 1) {
      index++;
    }
    if (f > 0 && initialState[f - 1][c].color === 1) {
      index++;
    }
    if (c > 0 && f > 0 && initialState[f - 1][c - 1].color === 1) {
      index++;
    }
    if (c > 0 && initialState[f][c - 1].color === 1) {
      index++;
    }
    if (c > 0 && f < 9 && initialState[f + 1][c - 1].color === 1) {
      index++;
    }
    //console.log("fila="+f+"columna"+c+"estat="+a);
    //console.log("index="+index);
    switch (index) {
      case (0, 1, 4, 5, 6, 7, 8, 9):
        response = 0;
        break;
      case 2:
        if (a === 1) {
          response = 1;
        } else {
          response = 0;
        }
        break;
      case 3:
        response = 1;
        break;
    }
    //console.log("response ="+response);
    return response;
  };
  /*this.make_move=function(array){
        if(array===this.initialState){
            setTimeout(function(){this.paint_boxes(this.nextState);},2000);
            make_move(this.nextState);
        }else{
            setTimeout(function(){this.paint_boxes(this.initialState);},2000);
            make_move(this.initialState);
        }
    }*/
}

let game = new Game_life();
let resultState = [];

//console.log(game.game_life(game.initialState));
game.paint_boxes(initialState);
/*setTimeout(function(){
    this.arrayRecieved=game.game_life(game.initialState);
}, 2000);*/
//let step = 1;
let but = document.getElementById("bt");
but.onclick = function () {
  click();
};
let arrayRecieved;
function click() {
  debugger;
  resultState = game.game_life(initialState);

  initialState = resultState;
  resultState = [];
  console.log("initialState", resultState);
}
//console.log(arrayRecieved);

/*setTimeout(function() {
    this.arrayRecieved=game.game_life(game.initialState);
   // console.log(this.arrayRecieved);
}, 2000);*/

/*function loop(){
    game.game_life(game.nextState);
    setTimeout(function() {
        this.loop();
    
}, 2000);}*/
//loop();
//setInterval(game.game_life(game.nextState),2000);
/*function loop(){
    setTimeout(function(){
        game.paint_boxes(game.nextState);
        },2000);
    game.initialState=game.nextState;
    game.game_life(game.initialState);
    loop();
}*/
