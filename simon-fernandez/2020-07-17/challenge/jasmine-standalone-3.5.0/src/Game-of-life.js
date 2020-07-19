function Game (blinkerStart,blinkerEnd,toadStart,toadEnd,beaconStart,beaconEnd) {
    this.blinkerStart=function () {
        //return blinkerStart
        return gameOfLife(blinkerStart);
    },
    this.blinkerEnd=function () {
        //return blinkerEnd
        return gameOfLife(blinkerEnd);
    },
    this.toadStart=function () {
        //return toadStart
        return gameOfLife(toadStart);
    },
    this.toadEnd=function () {
        //return toadEnd
        return gameOfLife(toadEnd);
    },
    this.beaconStart=function () {
        //return beaconStart
        return gameOfLife(beaconStart);
    },
    this.beaconEnd=function () {
        //return beaconEnd
        return gameOfLife(beaconEnd);
    }
}