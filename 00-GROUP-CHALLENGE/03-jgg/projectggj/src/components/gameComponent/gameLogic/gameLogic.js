export const CHARGE = 'Charge';
export const AVOID = 'Avoid';
export const ATTACK = 'Attack';
export const FAIL = 'FAIL';
const { random } = Math;
const INITIAL_LIVES = 3;
const INITIAL_CHARGES = 1;
const INITIAL_ACTION = '';

function Player(names, isMachine = true) {

    let name = names;
    let charges = INITIAL_CHARGES;
    let action = INITIAL_ACTION;
    let lives = INITIAL_LIVES;
    let ret;

    function resetPlayer() {
        lives = INITIAL_LIVES;
        charges = INITIAL_CHARGES;
        action = INITIAL_ACTION;
    }
    function setAction(newAction) {
        action = newAction;
        calculateAction();
    }

    function generateAction() {
        let naction
        if (charges > 0)
            naction = Math.floor(random() * 3)
        else
            naction = Math.floor(random() * 2)

        translateAction(naction.toString());
        return calculateAction();
    }

    function calculateAction() {
        if (action === CHARGE) {
            ++charges;
        } else if (action === ATTACK && charges > 0) {
            --charges;
        } else if (action === ATTACK && charges <= 0) {
            action = FAIL;
        }
        return action;
    }
    function recibeAction(comingAction) {
        let log = '';
        if (comingAction === ATTACK && action === CHARGE) {
            --lives;
            log = name + ' recived an attack! ';
        } else if (comingAction === ATTACK && action === FAIL) {
            --lives;
            log = name + ' run out of KI! and recives an attack! ';

        } else if (comingAction === ATTACK && action === AVOID) {
            log = name + ' avoid the attack!';
        } else if (comingAction === ATTACK && action === ATTACK) {
            log = ('Both attacks, no one gets hurt')
        } else if (action === FAIL) {
            log = ("Can not attack! No Ki remain! ")
        } else {
            log = ("Enemy does't attack!")
        }

        return log;
    }

    function translateAction(naction) {
        if (naction === '0')
            action = CHARGE;
        else if (naction === '1')
            action = AVOID;
        else
            action = ATTACK;
    }
    function getAction() {
        return action;
    }

    function getLives() {
        return lives;
    }
    function getCharges() {
        return charges;
    }
    function getName() {
        return name;
    }
    if (isMachine)
        ret = { generateAction, recibeAction, getAction, getLives, getName, getCharges, resetPlayer }
    else
        ret = { setAction, recibeAction, getAction, getLives, getCharges, getName, resetPlayer }

    return ret;
}
export default Player;
