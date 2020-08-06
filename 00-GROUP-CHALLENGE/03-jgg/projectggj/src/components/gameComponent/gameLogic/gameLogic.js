export const CHARGE = 'Charge';
export const AVOID = 'Avoid';
export const ATTACK = 'Attack';
const FAIL = 'FAIL';

function player(names = 'Machine', isMachine = false) {
    let name = names;
    let charges = 1;
    let action = '';
    let lives = 3;
    let ret;


    function setAction(newAction) {
        action = newAction;
        calculateAction(action)
    }

    function generateAction() {
        let naction
        if (charges > 0)
            naction = Math.floor(Math.random() * 3)
        else
            naction = Math.floor(Math.random() * 2)

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
        if (comingAction === ATTACK && (action === CHARGE || action === FAIL)) {
            --lives;
            log = name + ' recived an attack! ';
        } else if (comingAction === ATTACK && action === AVOID) {
            log = name + ' avoid the attack!';
        } else if (comingAction === ATTACK && action === ATTACK) {
            log = ('Both attacks, noone gets hurt')
        } else {
            log = ("Enemy doesn't attack ")
        }

        return log;
    }
    // function recibeActionRobot(comingAction) {
    //     let log = "";
    //     if (comingAction === ATTACK && (action === CHARGE || action === FAIL)) {
    //         --lives;
    //         log = name + ' recived an attack! ' + lives + ' remain';
    //     }
    //     return log;
    // }

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
        ret = { generateAction, recibeAction, getAction, getLives, getName, getCharges }
    else
        ret = { setAction, recibeAction, getAction, getLives, getCharges, getName }

    return ret
}
export default player;
