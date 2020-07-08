//Code by Gabriel Penalva, Skylab CODERS alumn. 06/2020
//we will use this variables as CONSTANTS to be easyer to change on future
var MAX = 100; //This changes the total of numbers played, not must be less than a card Size.
var CARD_SIZE = 15;
var CARD_LINE = 5;
var player = {
    name: "",
    points: 1000,
    line: false,
    bingo: false,
    card: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]
}

var ranking = [];
var numbers = [];

function  getName (str){
    var rExp = /^[A-Za-z]+$/;
    var name;
    do {
        name = prompt(str);
        if (name.match(rExp));
            console.log("Please, use JUST Letters.")
    }while(!name.match(rExp));
    return name;
}

function Points(name, points) {
    this.name = name;
    this.points = points;
}



function getRandomInteger(max) {
    return (Math.floor(Math.random() * (max + 1)) - 1);
}

function createAllNumbers() {
    numbers = [];
    for (var i = 0; i < MAX; i++) {
        numbers.push(i + 1);
    }

}
//Check if some number matches with a card
function checkNumer(numToCheck) {

    for (var i = 0; i < player.card.length; i++) {
        for (var j = 0; j < player.card[i].length; j++) {
            if (player.card[i][j] == numToCheck) {
                player.card[i][j] = "X";
                return true;
            }

        }
    }
    return false;
}
function checkLine() {
    var count;
    for (x in player.card) {
        count = 0;
        for (var i = 0; i < player.card[x].length; i++) {
            if (player.card[x][i] != "X") {
                i = player.card[x].length;//No necesary to checK more this line
            } else {
                count++;
            }
        }
        if (count == CARD_LINE) {
            return true;
        }
    }
    return false;
}

function checkBingo() {
    var count = 0;
    for (x in player.card) {

        for (var i = 0; i < player.card[x].length; i++) {
            if (player.card[x][i] != "X") {
                i = player.card[x].length;//No necesary to checK more this line
            } else {
                count++;
            }
        }

    }
    if (count == CARD_SIZE) {
        return true;
    } else
        return false;
}
//return a number of the array full of numbers remain
function getNumber() {
    var rand
    rand = getRandomInteger(numbers.length);
    return parseInt(numbers.splice(rand, 1));
}
// creates a new card with random positions.
function setCard() {
    createAllNumbers();
    for (var i = 0; i < player.card.length; i++) {
        for (var j = 0; j < player["card"][i].length; j++) {
            player.card[i][j] = getNumber();
        }
    }
}

function ordenateRanking() {
    ranking.sort(function (a, b) {
        if (a.points > b.points) {
            return -1;
        }
        if (a.points < b.points) {
            return +1;
        }
        // a must be equal to b
        return 0;
    });

}


function showRanking() {
    console.log("RANKING:");
    if (ranking.length != 0) {
        for (var i = 0; i < ranking.length; i++) {
            console.log(ranking[i].name, "have", ranking[i].points, "points");
        }
    }
}

function keepPoints() {

    ranking[ranking.length] = new Points(player.name, player.points);

}

function showCard() {
    console.log(player.card[0]);
    console.log(player.card[1]);
    console.log(player.card[2]);
}
function bingo() {
    var numOut;
    console.log("Numbers remain:", numbers);
    numOut = getNumber();

    console.log("The numer is:", numOut);
    if (checkNumer(numOut)) {
        console.log("MATCH");
        showCard();
        if (!player.line) {
            if (checkLine()) {
                player.line = true;
                player.points += 50;
                console.log("LINEA!");
            }
        }
        if (checkBingo()) {
            player.bingo = true;
            console.log("Bingo! Player", player.name, "WON!  GAME OVER");
        }
    } else {
        console.log("not Match, canrd keeps same...");

    }
}
function showPointsSystem(){
    console.log("You start, with 1000 points.");
    console.log("Every turn u spend 10 points.");
    console.log("The first LANE give you 50 points.");
    
}
function gameLogic(){
    player.bingo = false;
    player.line = false;
    var nextT = true;
    var nTurns = 0;
    
    var cardOk;

    player.name = getName ("Player name");;
    player.points = 1000;
    console.log("Welcome to bingo", player.name, "!");
    showPointsSystem();
    do {
        console.log("This is your card");
        setCard();
        showCard();
        cardOk = confirm("Want This Card?");
    } while (!cardOk)
    console.log("Let's Start!");
    createAllNumbers();
    do {

        bingo();
        nTurns++;
        player.points -= 10;
        if (!player.bingo)                 //COMENT THIS TWO LINES
            nextT = confirm("Next turn?"); //FOR AUTOPLAY! :D
    } while (!player.bingo && nextT)
    if (player.bingo){
        console.log("You win on", nTurns, "turns, well done!");
        keepPoints();
        ordenateRanking();
        showRanking();
    }
}

do {
    var another;
    gameLogic();

    another = confirm("Play again?");
} while (another)