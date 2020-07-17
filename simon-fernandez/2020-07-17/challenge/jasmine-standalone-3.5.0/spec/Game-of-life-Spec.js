describe('Game', function (){
    let blinkerStart;
    let blinkerEnd;
    let game;
    beforeAll(function(){
        blinkerStart=
        [
            [0,0,0,0,0]
            [0,0,0,0,0]
            [0,1,1,1,0]
            [0,0,0,0,0]
            [0,0,0,0,0]
        ];
        blinkerEnd=
        [
            [0,0,0,0,0]
            [0,0,1,0,0]
            [0,0,1,0,0]
            [0,0,1,0,0]
            [0,0,0,0,0]
        ];
        toadStart=
        [
            [0,0,0,0,0,0]
            [0,0,0,0,0,0]
            [0,0,1,1,1,0]
            [0,1,1,1,0,0]
            [0,0,0,0,0,0]
            [0,0,0,0,0,0]
        ];
        toadEnd=
        [
            [0,0,0,0,0,0]
            [0,0,0,1,0,0]
            [0,1,0,0,1,0]
            [0,1,0,0,1,0]
            [0,0,1,0,0,0]
            [0,0,0,0,0,0]
        ];
        beaconStart=
        [
            [0,0,0,0,0,0]
            [0,1,1,0,0,0]
            [0,1,1,0,0,0]
            [0,0,0,1,1,0]
            [0,0,0,1,1,0]
            [0,0,0,0,0,0]
        ]
        beaconEnd=
        [
            [0,0,0,0,0,0]
            [0,1,1,0,0,0]
            [0,1,0,0,0,0]
            [0,0,0,0,1,0]
            [0,0,0,1,1,0]
            [0,0,0,0,0,0]
        ]
        game= new Game(blinkerStart,blinkerEnd,toadStart,toadEnd,beaconStart,beaconEnd);
    })

    it('Blinker first period should be', function(){
        expect(game.gameOfLife().toBe(blinkerEnd));
    })
    it('Blinker second period should be',function(){
        expect(Game.blinkerStart().toBe(blinkerStart));
    })
    it('Toad first period should be', function(){
        expect(Game.toadEnd().toBe(toadEnd));
    })
    it('Toad second period should be',function(){
        expect(Game.toadStart().toBe(toadStart));
    })
    it('Beacon first period should be', function(){
        expect(Game.baconEnd().toBe(beaconEnd));
    })
    it('Beacon second period should be',function(){
        expect(Game.beaconStart().toBe(beaconStart));
    })
    
})