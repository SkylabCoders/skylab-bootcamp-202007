function Game (blinkerStart,blinkerEnd,toadStart,toadEnd,beaconStart,beaconEnd) {
    this.blinkerStart=function () {
        return gameOfLife(blinkerStart);
    },
    this.blinkerEnd==function () {
        return gameOfLife(blinkerEnd);
    },
    this.toadStart==function () {
        return gameOfLife(toadStart);
    },
    this.toadEnd==function () {
        return gameOfLife(toadEnd);
    },
    this.beaconStart==function () {
        return gameOfLife(beaconStart);
    },
    this.beaconEnd==function () {
        return gameOfLife(beaconEnd);
    },
    this
}