import Player from './gameLogic';

describe('gameLogic', () => {

    const CHARGE = 'Charge';
    const AVOID = 'Avoid';
    const ATTACK = 'Attack';
    const FAIL = 'FAIL';
    let name = 'Shordi';
    let charges;
    let lives;
    let newPlayer;
    let newMachine;
    beforeEach(() => {

        charges = 1;
        lives = 3;
        newPlayer = new Player(name, false);
        newMachine = new Player();


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
