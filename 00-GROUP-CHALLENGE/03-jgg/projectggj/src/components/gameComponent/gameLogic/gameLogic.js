const CHARGE = 'Charge'; const AVOID = 'Avoid'; const ATTACK = 'Attack'; const FAIL = 'FAIL';

function player(names) {
    let name = names;
    let charges = 1;
    let action = '';
    let lives = 3;

    function getAction() {
        return action;
    }
    function setAction() {
        let setnAction = prompt('Select an action! 0 Charge 1 Avoid 2 Attack')
        translateAction(setnAction);
        calculateAction(action)
    }

    function generateAction() {
        let naction
        if (charges > 0)
            naction = Math.floor(Math.random() * 3)
        else
            naction = Math.floor(Math.random() * 2)

        translateAction(naction.toString());
        calculateAction(action);
    }

    function calculateAction() {
        if (action === CHARGE) {
            ++charges;
        } else if (action === ATTACK && charges > 0) {
            --charges;
        } else if (action === ATTACK && charges <= 0) {
            action = FAIL;
        }
    }
    function recibeAction(comingAction) {
        let log = '';
        if (comingAction === ATTACK && (action === CHARGE || action === FAIL)) {
            --lives;
            log = name + ' recived an attack!';
        } else {
            log = 'no attack comming';
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

    function getLives() {
        return lives;
    }
    return { setAction, generateAction, recibeAction, getAction, getLives };
}
function play() {

    let player1 = new player('gabriel');
    let machine = new player('machine');

    do {
        player1.setAction();

        machine.generateAction();
        console.log('Player human does' + player1.getAction());
        console.log('Machine does' + machine.getAction());
        console.log('player ' + player1.recibeAction(machine.getAction()));
        console.log('machine ' + machine.recibeAction(player1.getAction()));

    } while (player1.getLives() > 0 && machine.getLives() > 0)
    if (player1.getLives() > 0)
        console.log('congrats player wins')
    else
        console.log('player looses');
}
