/* Francesc Brugarolas - Skylab bootcamp 2020-07 - challenge #GameOfLife */
'use strict';

class Game {
    constructor(){
        this.params = {
            width: undefined,
            height: undefined,
            hcells: undefined,
            vcells: undefined,
            gridCell: 10,
            timeInt: 250,
            preventOverflow: true,
            overflowLimit: 400,
            styleBackgroundAlive: '#c1f30c',
            styleBackgroundDead: '#222222',
            styleMesh: '#223022'
        }
        
        this.state = {
            started: false,
            tickCount: 0,
            gameStart: undefined,
            gameEnd: undefined,
            endType: undefined,
            board: undefined,
            nextBoard: undefined
        }

        this.init = function inicia(){
            if(this.state.started === true){
                return this.game();
            } else {
                this.state.started = true;
                this.state.gameStart = new Date();
                this.params.width = canv.width;
                this.params.height = canv.height;
                this.params.hcells = this.params.width / this.params.gridCell;
                this.params.vcells = this.params.height / this.params.gridCell;
                this.state.board = this.createBoard();
                this.seedRandom();
                this.drawBoard();
                setTimeout(()=>{console.log('START'); this.game();}, this.params.timeInt);
                return;
            }
        }

        this.createBoard = function creaTablero(){
            let board = [];
            for (let i=0; i< this.params.vcells; i++){
                let row = [];
                for (let j = 0; j< this.params.hcells; j++){
                    row.push(0);
                }
                board.push(row);
            }
            return board;
        }

        this.seedRandom = function puebla(){
            for (let i=0; i<this.params.vcells; i++){
                for (let j=0; j<this.params.hcells; j++){
                    this.state.board[i][j] = randomProbability(20);
                }
            }
            function randomProbability(probability){
                if(probability < 0){ probability = -probability;}
                if(probability < 1 && probability > 0){ probability = probability*100;}
                if(probability > 100){
                    let divisorToTargetRange = 10 ** (String(probability).length - 1);
                    probability = Math.floor(probability / divisorToTargetRange);
                }
                let notRandom = [];
                for (let i=0; i<probability; i++){
                    notRandom.push(1);
                }
                for (let i = 0; i<100 - probability; i++){
                    notRandom.push(0);
                }
                let index = Math.floor(Math.random() * notRandom.length);
                return notRandom[index];
            }
        }

        this.seedFigures = function pueblaFiguras(figure){
            let xcenter = Math.floor(this.params.hcells / 2);
            let ycenter = Math.floor(this.params.hcells / 2);
            const figures = superfigures();
            return figures.figure;
        }

        this.drawBoard = function dibujaTablero(){
            ctx.fillStyle = this.params.styleBackgroundDead; 
            ctx.fillRect(0, 0, canv.width, canv.height);
            for (let i=0; i<this.params.width; i += this.params.gridCell){
                for (let j=0; j<this.params.height; j += this.params.gridCell){
                    let px = Math.floor(i / this.params.gridCell);
                    let py = Math.floor(j / this.params.gridCell);
                    if (this.state.board[px][py] === 1){
                        ctx.fillStyle = this.params.styleBackgroundAlive;
                        ctx.fillRect(i, j, this.params.gridCell, this.params.gridCell);
                    } else if (this.state.board[px][py] === 0){
                        ctx.fillStyle = this.params.styleMesh;
                        ctx.fillRect(i, j, this.params.gridCell, this.params.gridCell);
                        ctx.fillStyle = this.params.styleBackgroundDead;
                        ctx.fillRect(i+1, j+1, this.params.gridCell-1, this.params.gridCell-1);
                    }
                }
            }
        }

        this.nextTick = function proximoTick(){
            this.state.nextBoard = this.createBoard();
            for (let i=1; i<this.params.vcells -1; i++){
                for (let j = 1; j<this.params.hcells -1; j++){
                   this.state.nextBoard[i][j] = this.checkCell([i, j]);
                }
            }
        }

        this.checkCell = function checkCelula([px, py]){
            let aliveNeighbours = 0;
            for (let i=px-1; i<px+2; i++){
                for(let j=py-1; j<py+2; j++){
                    if (this.state.board[i][j] === 1){
                        aliveNeighbours++;
                    }
                }
            }
            if (this.state.board[px][py] === 1){aliveNeighbours--;}
            if (aliveNeighbours < 2 || aliveNeighbours > 3){
                return 0;
            } else {
                if (this.state.board[px][py] === 0 && aliveNeighbours === 3){
                    return 1;
                } else if (this.state.board[px][py] === 0 && aliveNeighbours === 2){
                    return 0;
                } else {
                    return 1;
                }
            }
        }  

        this.test = function testea(numberOfTicks, board){
            this.state.board = board;
            this.params.hcells = board[0].length;
            this.params.vcells = board.length;
            this.params.width = canv.width;
            this.params.height = canv.height;
            this.params.gridCell = Math.floor(this.params.width / board.length);
            this.state.nextBoard = this.createBoard();
            this.overflowLimit = numberOfTicks;
            this.params.timeInt = 50;
            this.state.started = true;
            this.state.gameStart = new Date();
            return this.game();
        }

        this.game = function juega(){
            this.state.tickCount++;
            this.nextTick();
            this.state.board = this.state.nextBoard;
            this.drawBoard();
            if(this.state.tickCount < this.params.overflowLimit){
                setTimeout(()=>{this.game();}, this.params.timeInt);
                return;
            } else {
                this.state.gameEnd = new Date();
                this.state.endType = 'Preset limit of ticks reached';
                return console.log('Goodbye');
            }
        }
    }
}

let canv = document.querySelector('#gameScreen');
let ctx = canv.getContext('2d');
let juego = new Game();

window.onload = function () {
    console.log('START UNIVERSE:');
    juego.init();
    //juego.test(2, [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]);
}

/* CATALOGUE OF FIGURES */
function superfigures(){
    return {
        fig_blinker(){
            this.state.board[xcenter][ycenter] = 1;
            this.state.board[xcenter - 1][ycenter] = 1;
            this.state.board[xcenter + 1][ycenter] = 1;
        },
        fig_toad(){
            this.state.board[xcenter][ycenter] = 1;
            this.state.board[xcenter - 1][ycenter] = 1;
            this.state.board[xcenter + 1][ycenter] = 1;
            this.state.board[xcenter][ycenter - 1] = 1;
            this.state.board[xcenter - 1][ycenter - 1] = 1;
            this.state.board[xcenter + 1][ycenter - 1] = 1;
        },
        fig_block(){
            this.state.board[xcenter][ycenter] = 1;
            this.state.board[xcenter - 1][ycenter] = 1;
            this.state.board[xcenter][ycenter - 1] = 1;
            this.state.board[xcenter - 1][ycenter - 1] = 1;
        },
        fig_beacon(){
            this.state.board[xcenter - 1][ycenter - 1] = 1;
            this.state.board[xcenter - 2][ycenter - 1] = 1;
            this.state.board[xcenter - 1][ycenter - 2] = 1;
            this.state.board[xcenter - 2][ycenter - 2] = 1;
            this.state.board[xcenter][ycenter] = 1;
            this.state.board[xcenter + 1][ycenter] = 1;
            this.state.board[xcenter][ycenter + 1] = 1;
            this.state.board[xcenter + 1][ycenter + 1] = 1;
        },
        fig_glider(){
            this.state.board[xcenter - 1][ycenter] = 1;
            this.state.board[xcenter][ycenter] = 1;
            this.state.board[xcenter + 1][ycenter] = 1;
            this.state.board[xcenter + 1][ycenter + 1] = 1;
            this.state.board[xcenter][ycenter + 2] = 1;
        },
        fig_pulsar(){
            this.state.board[xcenter - 2][ycenter + 1] = 1;
            this.state.board[xcenter - 3][ycenter + 1] = 1;      
            this.state.board[xcenter - 4][ycenter + 1] = 1;
            this.state.board[xcenter - 2][ycenter + 6] = 1;
            this.state.board[xcenter - 3][ycenter + 6] = 1;      
            this.state.board[xcenter - 4][ycenter + 6] = 1;    
            this.state.board[xcenter + 2][ycenter + 1] = 1;
            this.state.board[xcenter + 3][ycenter + 1] = 1;      
            this.state.board[xcenter + 4][ycenter + 1] = 1;
            this.state.board[xcenter + 2][ycenter + 6] = 1;
            this.state.board[xcenter + 3][ycenter + 6] = 1;      
            this.state.board[xcenter + 4][ycenter + 6] = 1;
            this.state.board[xcenter - 2][ycenter - 1] = 1;
            this.state.board[xcenter - 3][ycenter - 1] = 1;      
            this.state.board[xcenter - 4][ycenter - 1] = 1;
            this.state.board[xcenter - 2][ycenter - 6] = 1;
            this.state.board[xcenter - 3][ycenter - 6] = 1;      
            this.state.board[xcenter - 4][ycenter - 6] = 1;    
            this.state.board[xcenter + 2][ycenter - 1] = 1;
            this.state.board[xcenter + 3][ycenter - 1] = 1;      
            this.state.board[xcenter + 4][ycenter - 1] = 1;
            this.state.board[xcenter + 2][ycenter - 6] = 1;
            this.state.board[xcenter + 3][ycenter - 6] = 1;      
            this.state.board[xcenter + 4][ycenter - 6] = 1;
            this.state.board[xcenter - 1][ycenter + 2] = 1;
            this.state.board[xcenter - 1][ycenter + 3] = 1;
            this.state.board[xcenter - 1][ycenter + 4] = 1;   
            this.state.board[xcenter - 6][ycenter + 2] = 1;
            this.state.board[xcenter - 6][ycenter + 3] = 1;
            this.state.board[xcenter - 6][ycenter + 4] = 1;
            this.state.board[xcenter - 1][ycenter - 2] = 1;
            this.state.board[xcenter - 1][ycenter - 3] = 1;
            this.state.board[xcenter - 1][ycenter - 4] = 1;   
            this.state.board[xcenter - 6][ycenter - 2] = 1;
            this.state.board[xcenter - 6][ycenter - 3] = 1;
            this.state.board[xcenter - 6][ycenter - 4] = 1;   
            this.state.board[xcenter + 1][ycenter + 2] = 1;
            this.state.board[xcenter + 1][ycenter + 3] = 1;
            this.state.board[xcenter + 1][ycenter + 4] = 1;   
            this.state.board[xcenter + 6][ycenter + 2] = 1;
            this.state.board[xcenter + 6][ycenter + 3] = 1;
            this.state.board[xcenter + 6][ycenter + 4] = 1;
            this.state.board[xcenter + 1][ycenter - 2] = 1;
            this.state.board[xcenter + 1][ycenter - 3] = 1;
            this.state.board[xcenter + 1][ycenter - 4] = 1;   
            this.state.board[xcenter + 6][ycenter - 2] = 1;
            this.state.board[xcenter + 6][ycenter - 3] = 1;
            this.state.board[xcenter + 6][ycenter - 4] = 1;           
        }
    };
}
