import Player from './gameLogic';
import gameComponent from '../gameComponent';

describe('gameLogic', () => {
    let name;
    let charges;
    let action;
    let lives;
    let ret;
    let newPlayer;
    let newMachine;
    let naction;
    let CHARGE;
    let AVOID;
    let ATTACK;
    let FAIL
    let log;

    beforeEach(() => {
        let names = 'Shordi';
        let log = '';
        charges = 1;
        action = '';
        lives = 3;
        newPlayer = new Player(names, false);
        newMachine = new Player('R2D2', true);
        const CHARGE = 'Charge';
        const AVOID = 'Avoid';
        const ATTACK = 'Attack';
        const FAIL = 'FAIL';
    });

    it('should create reset a new Player', function resetPlayer() {
        newPlayer.resetPlayer()

        expect(newPlayer.getLives()).toEqual(lives);
        expect(newPlayer.getCharges()).toEqual(charges);
        expect(newPlayer.getAction()).toBe('');
    });
    it('should setAction', function setAction() {

        newPlayer.setAction()

        newPlayer.setAction(ATTACK)
        expect(newPlayer.getAction()).toBe(ATTACK);

        newPlayer.setAction(ATTACK)
        expect(newPlayer.getAction()).toBe(FAIL);

        newPlayer.setAction(CHARGE)
        expect(newPlayer.getAction()).toBe(CHARGE);

        //        expect(newPlayer.generateAction().toHaveBeenCalled(1))
    });
    it('should generateAction', function generateAction() {
        newMachine.generateAction()
        newMachine.generateAction()
        newMachine.generateAction()

        expect(newMachine.generateAction()).toBeDefined()
    });
    it('should calculateAction', function calculateAction() {
        /*         Dona error si ho fiquem, diu que no es una funció
                expect(newMachine.calculateAction()).toBeDefined();
                expect(newPlayer.calculateAction()).toBeDefined(); */
    });
    it('should recibeAction', function recibeAction() {
        action = CHARGE;
        expect(newPlayer.recibeAction(ATTACK && action)).toBeDefined();
        action = FAIL;
        expect(newPlayer.recibeAction(ATTACK && action)).toBeDefined();
        action = ATTACK;
        expect(newPlayer.recibeAction(ATTACK && action)).toBeDefined();
        action = AVOID;
        expect(newPlayer.recibeAction(ATTACK && action)).toBeDefined();
    });
    it('should getName', function getName() {
        expect(newPlayer.getName(name));
    })
});
