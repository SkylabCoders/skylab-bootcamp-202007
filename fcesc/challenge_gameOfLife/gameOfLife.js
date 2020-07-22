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
            timeInt: 200,
            preventOverflow: true,
            overflowLimit: 450,
            styleBackgroundBorn: '#0f0',
            styleBackgroundAlive: '#c1f30c',
            styleBackgroundDead: '#222222',
            styleBackgroundDying: '#546908',
            styleMesh: '#226022',
            mesh: false,
            matrixAlphabet: 'むかしむかし月の上を飛ぶ猫がいた彼は軽いスピードで旅行できる熟練した哲学者でした子猫の知識の根源でありその翼は柔軟でしたЛюдирешилиотправитьсвиньювдальнийкосмосвкачествесвоегопослаàaáèeéìiíòoóùuúâêîôûäëïöüqwertyuiopasdfghjklñzxcvbnmç{}[]^`".:;,-_¨()/&%$·!¿?¿ºª1234567890העוגיותבצנצנתהימתוקותעבורהמדען竹子像风一样流淌着甜美根茎坚固叶绿किसीदिनसमययात्रासंभवहोसकतीहै।ومنثم،فإناللونالطبيعيللدقةيتضاءلبسببالتقعسElataquedeloskoalasempezóel23deseptiembrede2346,cuando1548293animaleshicieronestragosenNuevaYorkΟΣωκράτηςδενέτρωγεφασόλιακάθεΚυριακήσύμφωναμεπρόσφαταευρήματαειδικών',
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
            nextBoard: undefined,
            births: 0,
            deaths: 0,
            growth: 0,
            alive: 0,
            density: '',
            fade: 0
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
                this.params.width = parseInt(Math.floor(window.innerWidth - (window.innerWidth % this.params.gridCell)));
                this.params.height = parseInt(Math.floor((window.innerHeight * 0.8) - ((window.innerHeight * 0.8) % this.params.gridCell)));
                canv.width = this.params.width;
                canv.height = this.params.height;
                this.params.hcells = this.params.width / this.params.gridCell;
                this.params.vcells = this.params.height / this.params.gridCell;
                this.state.board = this.createBoard();
                this.state.nextBoard = this.createBoard();
                this.seedRandom();
                this.drawBoard();
                setTimeout(()=>{console.log('START'); this.game();}, this.params.timeInt);
                return;
            }
        }

        this.calculateDensity = function calculaDensidad (){
            const boardSize = this.params.hcells * this.params.vcells;
            return `${((this.state.alive / boardSize) * 100).toFixed(2)} %`;
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
                    let value = randomProbability(20);
                    if (value === 1){ this.state.births++; }
                    this.state.nextBoard[i][j] = value;
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
            this.state.alive = 0;
            ctx.fillStyle = this.params.styleBackgroundDead; 
            ctx.fillRect(0, 0, canv.width, canv.height);
            for (let i=0; i<this.params.height; i += this.params.gridCell){
                for (let j=0; j<this.params.width; j += this.params.gridCell){
                    let py = Math.floor(i / this.params.gridCell);
                    let px = Math.floor(j / this.params.gridCell);
                    if (this.state.nextBoard[py][px] === 1){
                        if (this.state.board[py][px] === 0){
                            ctx.fillStyle = this.params.styleBackgroundBorn;
                            this.state.births++;
                        } else {
                            ctx.fillStyle = this.params.styleBackgroundAlive;
                            this.state.alive++;
                        }
                        ctx.font = '10pt sans-serif';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        let text = this.params.matrixStyle[Math.floor(Math.random() * this.params.matrixLength)];
                        let centerOffset = this.params.gridCell / 2;
                        ctx.strokeStyle = this.params.styleMesh;
                        ctx.strokeRect(j, i, this.params.gridCell, this.params.gridCell);
                        ctx.fillText(text, j + centerOffset, i + centerOffset);
                    } else if (this.state.nextBoard[py][px] === 0){
                        this.state.deaths++;
                        if(this.params.mesh){
                            ctx.fillStyle = this.params.styleMesh;
                            ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
                            ctx.fillStyle = this.params.styleBackgroundDead;
                            ctx.fillRect(j+1, i+1, this.params.gridCell-1, this.params.gridCell-1);
                        } else {
                            ctx.fillStyle = this.params.styleBackgroundDead;
                            ctx.fillRect(j, i, this.params.gridCell, this.params.gridCell);
                        }
                    }
                }
            }
            (this.state.alive === 0)? this.state.growth = '0.00 %': this.state.growth = `${(((this.state.births - this.state.deaths) / (this.state.births + this.state.deaths)) * 100).toFixed(2)} %`;
            this.state.density = this.calculateDensity();
            this.updateUIinfo();
        }

        this.fadeOut = function desvanece(){
            this.state.fade = this.state.fade + 8;
            if (this.state.fade <= 256){
                setTimeout(()=>{
                    let hex = this.state.fade.toString(16);
                    if (hex.length === 1){ hex = '0' + hex; }
                    ctx.fillStyle = '' + this.params.styleBackgroundDead + hex; 
                    ctx.fillRect(0, 0, canv.width, canv.height);
                    this.fadeOut();
                }, this.params.timeInt);
            }
        }

        this.updateUIinfo = function actualizaInfoIU(){
            ticks.innerHTML = `${this.state.tickCount}`;
            alive.innerHTML = `${this.state.alive}`;
            deaths.innerHTML = `${this.state.deaths}`;
            births.innerHTML = `${this.state.births}`;
            growth.innerHTML = `${this.state.growth}`;
            density.innerHTML = `${this.state.density}`;
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
            this.state.board = this.expand(board);
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

        this.expand = function expande(board){
            let rows = board.length;
            let cols = board[0].length;
            let expandedBoard = [];
            let expandedRow = [];
            for (let i=0; i<cols; i++){
                expandedRow.push(0);
            }
            for (let i=0; i<rows; i++){
                expanededBoard.push([0, 0, ...board[i], 0, 0]);
            }
            for (let i=1; i<2; i++){
                expandedBoard.unshift(epandedRow);
                expandedBoard.push(epandedRow);
            }
        }

        this.game = function juega(){
            this.state.tickCount++;
            this.drawBoard();
            this.state.board = this.state.nextBoard;
            this.nextTick();
            if(this.state.tickCount < this.params.overflowLimit){
                setTimeout(()=>{this.game();}, this.params.timeInt);
                return;
            } else {
                this.state.gameEnd = new Date();
                this.state.endType = 'Preset limit of ticks reached';
                this.fadeOut();
                return console.log('Goodbye');
            }
        }
    }
}

let canv = document.querySelector('#gameScreen');
let ctx = canv.getContext('2d');
let ticks = document.querySelector('#ticks');
let births = document.querySelector('#births');
let deaths = document.querySelector('#deaths');
let growth = document.querySelector('#growth');
let alive = document.querySelector('#alive');
let density = document.querySelector('#density');
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
