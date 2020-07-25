/* Francesc Brugarolas - Skylab bootcamp 2020-07 - challenge #GameOfLife */
'use strict';

class Game {
    constructor(){
        this.params = {
            width: undefined,
            height: undefined,
            hcells: undefined,
            vcells: undefined,
            gridCell: 15,
            timeInt: 250,
            preventOverflow: true,
            overflowLimit: 400,
            styleBackgroundAlive: '#c1f30c',
            styleBackgroundDead: '#222222',
            styleMesh: '#223022',
            mesh: false,
            matrixAlphabet: 'むかしむかし、月の上を飛ぶ猫がいた。彼は軽いスピードで旅行できる熟練した哲学者でした。子猫の知識の根源であり、その翼は柔軟でした。 Люди решили отправить свинью в дальний космос в качестве своего посла. àaáèeéìiíòoóùuúâêîôûäëïöüqwertyuiopasdfghjklñzxcvbnmç{}[]^`".:;,-_¨()/&%$·!¿?¿ºª1234567890העוגיות בצנצנת היו מתוקות עבור המדען.竹子像风一样流淌着甜美，根茎坚固，叶绿किसी दिन समय यात्रा संभव हो सकती है।ومن ثم ، فإن اللون الطبيعي للدقة يتضاءل بسبب التقاعس.',
            matrixStyle: [],
            matrixLength: 0
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

        this.matrixize = function matrixea(){
            this.params.matrixStyle = this.params.matrixAlphabet.split('');
            this.params.matrixLength = this.params.matrixStyle.length;
        }

        this.init = function inicia(){
            this.matrixize();
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
                        //ctx.fillRect(i, j, this.params.gridCell, this.params.gridCell);
                        ctx.fillStyle = this.params.styleBackgroundAlive;
                        ctx.font = '10pt sans-serif';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        let text = this.params.matrixStyle[Math.floor(Math.random() * this.params.matrixLength)];
                        let centerOffset = this.params.gridCell / 2;
                        ctx.fillText(text, i + centerOffset, j + centerOffset);
                    } else if (this.state.board[px][py] === 0){
                        if(this.params.mesh){
                            ctx.fillStyle = this.params.styleMesh;
                            ctx.fillRect(i, j, this.params.gridCell, this.params.gridCell);
                            ctx.fillStyle = this.params.styleBackgroundDead;
                            ctx.fillRect(i+1, j+1, this.params.gridCell-1, this.params.gridCell-1);
                        } else {
                            ctx.fillStyle = this.params.styleBackgroundDead;
                            ctx.fillRect(i, j, this.params.gridCell, this.params.gridCell);
                        }
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
