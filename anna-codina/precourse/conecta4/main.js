var conectaQuatroGame = {
    panel: {
        // the column numbers are in decresing valor for help th drawPanel method.
        'column7': [],
        'column6': [],
        'column5': [],
        'column4': [],
        'column3': [],
        'column2': [],
        'column1': [],
    },
    totalColumn: 7,
    circlesByColumn: 6,
    conectToWin: 4,
    playerOne: {
        index: 1,
        win: false,
    },
    playerTwo:{
        index: 2,
        win: false,
    },
    actualPlayer: null,
    playAlone: false,
    startAlone: function(){
        this.playAlone = true;
        this.start();
    },
    start: function(){
        this.actualPlayer = this.playerOne;
        this.clearPanel();
        this.playerOne.win = false;
        this.playerTwo.win = false;
        document.getElementsByTagName("h1")[0].innerHTML = "CONECTA 4"
        document.getElementById("actual-player").innerHTML = "ROJO";
        document.getElementById("actual-player").style.color = "red";
        document.getElementsByClassName("area")[1].classList.remove("hidden");
        document.getElementsByClassName("area")[1].classList.add("visible");
        document.getElementsByTagName("form")[0].classList.remove("visible");
        document.getElementsByTagName("form")[0].classList.add("hidden");
        for (var i = 1; i <=2; i++){
            document.getElementsByTagName("form")[i].classList.remove("hidden");
            document.getElementsByTagName("form")[i].classList.add("visible");
        }
        for (var i=0; i <= 6; i++){
            document.getElementsByClassName("column-button")[i].classList.remove("hidden");
            document.getElementsByClassName("column-button")[i].classList.add("visible");
        }
    },
    clearPanel: function(){
        for (var i = 0 ; i <=41; i++){
            document.getElementsByClassName("play-circle")[i].classList.add("empty");
            document.getElementsByClassName("play-circle")[i].classList.remove("red");
            document.getElementsByClassName("play-circle")[i].classList.remove("yellow");
        }2
        this.panel["column1"] = [];
        this.panel["column2"] = [];
        this.panel["column3"] = [];
        this.panel["column4"] = [];
        this.panel["column5"] = [];
        this.panel["column6"] = [];
        this.panel["column7"] = [];
    },
    drawPanel: function(){
        // this index CircleIndex is for pointing each element of HTML play-circle.
        // starting in the last circle because the game will be completed down to upside.
        var circleIndex = 41;
        for (var i in this.panel){
            // Counts the number of circles marked in each column.
            var actualCircleInColumn = 0;
            for (var j in this.panel[i]){
                if (this.panel[i][j] === 1){
                    document.getElementsByClassName("play-circle")[circleIndex].classList.add("red");
                    document.getElementsByClassName("play-circle")[circleIndex].classList.remove("empty");
                } else if (this.panel[i][j] === 2){
                    document.getElementsByClassName("play-circle")[circleIndex].classList.add("yellow");
                    document.getElementsByClassName("play-circle")[circleIndex].classList.remove("empty");
                }
                actualCircleInColumn++;
                circleIndex--;
            }
            // we update the index using resting actualCircleInColumn at circlesByColumn
            // for know how much circles are resting undefined in the column because the for in will not iterate with them.
            circleIndex -= (this.circlesByColumn - actualCircleInColumn); 
        }  
    },
    checkGame: function(){
        this.checkVertical();
        this.checkHoritzontal();
        this.checkDiagonal();
        if (this.actualPlayer.win || this.checkTie()){
            this.finish();
        }
    },
    checkVertical: function(){
        for (var i in this.panel){
            if (this.panel[i].length >= this.conectToWin){
                for(var j = 0; j < this.circlesByColumn; j++){
                    if (this.panel[i][(j+3)] === undefined){
                        break;
                    }
                    else if(this.panel[i][j] === this.actualPlayer.index && this.panel[i][j+1] === this.actualPlayer.index && this.panel[i][j+2] === this.actualPlayer.index && this.panel[i][j+3] === this.actualPlayer.index){
                        this.actualPlayer.win = true;
                        break;
                    }
                } 
            }
        }
    },
    checkHoritzontal: function(){
        for (var i = 1; i <= this.totalColumn ; i++){
            var maxColumnIndex = false;
            for (var j = 0; j <= (this.circlesByColumn-1); j++){
                var actualColumn = "column" + String(i);
                var secondColumn = "column" + String(i+1);
                var thirdColumn = "column" + String(i+2);
                var forthColumn = "column" + String(i+3);
                if (forthColumn === "column8"){
                    maxColumnIndex = true;
                    break;
                } else if (this.panel[actualColumn][j] === this.actualPlayer.index && this.panel[secondColumn][j] === this.actualPlayer.index && this.panel[thirdColumn][j] === this.actualPlayer.index && this.panel[forthColumn][j] === this.actualPlayer.index){
                    this.actualPlayer.win = true;
                    break;
                }
            }
            if (maxColumnIndex){
                break;
            }
        }       
    },
    checkDiagonal: function(){
        for (var i = 1; i <= this.totalColumn ; i++){
            var maxColumnIndex = false;
            for (var j = 0; j <= (this.circlesByColumn-1); j++){
                var actualColumn = "column" + String(i);
                var secondColumn = "column" + String(i+1);
                var thirdColumn = "column" + String(i+2);
                var forthColumn = "column" + String(i+3);
                if (forthColumn === "column8"){
                    maxColumnIndex = true;
                    break;
                } else if ((j+3) > (this.circlesByColumn-1)) {
                    break;
                } else if (this.panel[actualColumn][j] === this.actualPlayer.index && this.panel[secondColumn][j+1] === this.actualPlayer.index && this.panel[thirdColumn][j+2] === this.actualPlayer.index && this.panel[forthColumn][j+3] === this.actualPlayer.index){
                    this.actualPlayer.win = true;
                    break;
                }
            }
            if (maxColumnIndex){
                break;
            }
        };
        for (var i = 7; i > 0 ; i--){
            var maxColumnIndex = false;
            for (var j = 0; j <= (this.circlesByColumn-1); j++){
                var actualColumn = "column" + String(i);
                var secondColumn = "column" + String(i-1);
                var thirdColumn = "column" + String(i-2);
                var forthColumn = "column" + String(i-3);
                if (forthColumn === "column0"){
                    maxColumnIndex = true;
                    break;
                } else if ((j+3) > (this.circlesByColumn-1)){
                    break;
                } else if (this.panel[actualColumn][j] === this.actualPlayer.index && this.panel[secondColumn][j+1] === this.actualPlayer.index && this.panel[thirdColumn][j+2] === this.actualPlayer.index && this.panel[forthColumn][j+3] === this.actualPlayer.index){
                    this.actualPlayer.win = true;
                    break;
                }
            }
            if (maxColumnIndex){
                break;
            }
        }
    },
    checkTie: function(){
        var tieIndex = true;
        for(var i in this.panel){
            if(this.panel[i].length < this.circlesByColumn){
                tieIndex = false;
                return tieIndex;
            }
        }
        return tieIndex;
    },
    turn: function(actualColumn, actualButonNumber){
        this.panel[actualColumn].push(this.actualPlayer.index);
        if (this.panel[actualColumn].length === this.circlesByColumn){
            document.getElementsByClassName("column-button")[actualButonNumber].classList.remove("visible");
            document.getElementsByClassName("column-button")[actualButonNumber].classList.add("hidden");
        }
        this.drawPanel();
        this.checkGame();
        if (!this.actualPlayer.win){
            this.changePlayer();
        }
    },
    changePlayer: function(){
        if (this.playAlone){
            if (this.actualPlayer === this.playerOne){
                this.actualPlayer = this.playerTwo;
                this.machineTurn();                
            } else {
                this.actualPlayer = this.playerOne;                
            }
        } else {
            if (this.actualPlayer === this.playerOne){
                this.actualPlayer = this.playerTwo;
                document.getElementById("actual-player").innerHTML = "AMARILLO";
                document.getElementById("actual-player").style.color = "yellow";
            } else {
                this.actualPlayer = this.playerOne;
                document.getElementById("actual-player").innerHTML = "ROJO";
                document.getElementById("actual-player").style.color = "red";
            }
        }
    },
    machineTurn: function(){
        var randomNumber = randomNumberGenerator(7);
        var matchColumn = false;
        do {
            randomNumber++;
            var actualColumn = "column"+ String(randomNumber);
            if (this.panel[actualColumn].length < this.circlesByColumn){
                this.panel[actualColumn].push(this.actualPlayer.index);
                matchColumn = true;
            } else {
                if(actualColumn === "column7"){
                    randomNumber = 0;
                }           
            }
        } while (!matchColumn);
        this.drawPanel();
        this.checkGame();
        if (!this.actualPlayer.win){
            this.changePlayer();
        }
    },
    finish: function(){
        this.playAlone = false;
        if (this.playerOne.win){
            document.getElementsByTagName("h1")[0].innerHTML = "¡Gana el color <strong>ROJO<strong>!";
        } else if (this.playerTwo.win){
            document.getElementsByTagName("h1")[0].innerHTML = "¡Gana el color <strong>AMARILLO<strong>!";
        } else {
            document.getElementsByTagName("h1")[0].innerHTML = "¡EMPATE!";
        }
        for (var i=0; i <= 6; i++){
            document.getElementsByClassName("column-button")[i].classList.remove("visible");
            document.getElementsByClassName("column-button")[i].classList.add("hidden");
        }
        document.getElementsByTagName("form")[0].classList.remove("hidden");
        document.getElementsByTagName("form")[0].classList.add("visible");
        document.getElementsByTagName("form")[2].classList.remove("visible");
        document.getElementsByTagName("form")[2].classList.add("hidden");
        document.getElementById("next-game").classList.remove("hidden");
        document.getElementById("next-game").classList.add("visible");
        document.getElementsByClassName("area")[1].classList.remove("visible");
        document.getElementsByClassName("area")[1].classList.add("hidden");

    },
};

function randomNumberGenerator(numberMax){
    var actualRandomNumber = Math.random()*numberMax;
    actualRandomNumber = Math.floor(actualRandomNumber);
    return actualRandomNumber;
};

// Events:
//this two events manages the diferents start games:
document.getElementsByTagName("input")[0].addEventListener("click", function (event){
    event.preventDefault();
    conectaQuatroGame.startAlone();
});
document.getElementsByTagName("input")[1].addEventListener("click", function (event){
    event.preventDefault();
    conectaQuatroGame.start();
});
// This events manage the column buttons that user uses for choose the column of this turn.
document.getElementsByClassName("column-button")[0].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column1";
    var buttonNumber = 0;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[1].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column2";
    var buttonNumber = 1;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[2].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column3";
    var buttonNumber = 2;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[3].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column4";
    var buttonNumber = 3;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[4].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column5";
    var buttonNumber = 4;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[5].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column6";
    var buttonNumber = 5;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
document.getElementsByClassName("column-button")[6].addEventListener("click", function (event){
    event.preventDefault();
    var columnNumber = "column7";
    var buttonNumber = 6;
    conectaQuatroGame.turn(columnNumber, buttonNumber);
});
// This events manages the reestart buton and finsih buton.
document.getElementsByTagName("input")[9].addEventListener("click", function (event){
    event.preventDefault();
    conectaQuatroGame.start();
});
document.getElementsByTagName("input")[10].addEventListener("click", function (event){
    event.preventDefault();
    conectaQuatroGame.finish();
});