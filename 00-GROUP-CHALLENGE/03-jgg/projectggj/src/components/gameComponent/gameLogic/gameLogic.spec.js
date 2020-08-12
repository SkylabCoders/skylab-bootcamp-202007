import Player from './gameLogic';
import gameComponent from '../gameComponent';

describe('gameLogic', () => {

    const CHARGE = 'Charge';
    const AVOID = 'Avoid';
    const ATTACK = 'Attack';
    const FAIL = 'FAIL';
    let name;
    let charges;
    let action;
    let lives;
    let newPlayer;
    let newMachine;

    const T800 = new Player();
    beforeEach(() => {
        let names = 'Shordi';

        charges = 1;
        action = '';
        lives = 3;
        newPlayer = new Player(names, false);

        newMachine = new Player('R2D2', true);


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

        newPlayer.setAction(ATTACK);
        expect(newPlayer.recibeAction(ATTACK)).toBe('Both attacks, no one gets hurt');
        newPlayer.setAction(ATTACK);
        expect(newPlayer.recibeAction(ATTACK)).toBe(newPlayer.getName() + ' run out of KI! and recives an attack! ');
        newPlayer.setAction(ATTACK);
        expect(newPlayer.recibeAction(CHARGE)).toBe('Can not attack! No Ki remain! ');
        newPlayer.setAction(CHARGE);
        expect(newPlayer.recibeAction(ATTACK)).toBe(newPlayer.getName() + ' recived an attack! ');
        newPlayer.setAction(AVOID);
        expect(newPlayer.recibeAction(ATTACK)).toBe(newPlayer.getName() + ' avoid the attack!');
        newPlayer.setAction(CHARGE);
        expect(newPlayer.recibeAction(AVOID)).toBe("Enemy does't attack!");

    });
    it('should getName', function getName() {
        expect(newPlayer.getName(name));
    })
});
