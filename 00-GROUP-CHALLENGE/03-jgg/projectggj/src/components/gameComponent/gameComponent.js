import React, { useState } from 'react';
import './gameComponent.css';
import player, { CHARGE, ATTACK, AVOID } from './gameLogic/gameLogic';
let player1;
let machine;
function GameComponent(props) {
    if (typeof player1 === 'undefined') {
        player1 = new player('You');
    }
    if (typeof machine === 'undefined') {
        machine = new player('machine', true);
    }

    let acctionMachine = '';
    const actions = {
        charge: 'https://64.media.tumblr.com/tumblr_m6autdMQ8q1r72ht7o1_500.gif',
        avoid: 'https://i.imgur.com/49nNGha.gif',
        attack:
            'https://steamuserimages-a.akamaihd.net/ugc/844842824162102286/E0C77C22F2E6904ED76E6769FD9072D308C6BB86/'
    };
    const [machineAction, setMachineAction] = useState(
        'https://thumbs.gfycat.com/PleasedLividGreyhounddog-size_restricted.gif'
    );
    const [machLives, setMachLives] = useState(machine.getLives());
    const [machCharges, setMachCharges] = useState(machine.getCharges());
    const [playerLives, setPlayerLives] = useState(player1.getLives());
    const [playerCharges, setPlayerCharges] = useState(player1.getCharges());
    const [gameLog, setGameLog] = useState(props.match.params.enemy + ' challenges You!');

    function setAnAction(acc) {
        if (player1.getLives() > 0 && machine.getLives() > 0) {
            player1.setAction(acc);

            acctionMachine = machine.generateAction();
            setImage(acctionMachine);
            console.log(player1.getName() + ' ' + player1.getAction());
            console.log('Machine ' + machine.getAction());
            setGameLog(player1.recibeAction(machine.getAction()));
            machine.recibeAction(player1.getAction());
            if (player1.getAction() === ATTACK && machine.getAction() === AVOID) {
                setGameLog('Enemy avoid the attack');

            } else if (player1.getAction() === ATTACK && machine.getAction() === CHARGE) {
                setGameLog('Enemy was hit by your attack!');
            }
            setMachCharges(machine.getCharges());
            setMachLives(machine.getLives());
            setPlayerCharges(player1.getCharges());
            setPlayerLives(player1.getLives());
        }
        if (player1.getLives() > 0 && machine.getLives() === 0) {
            setGameLog('YOU WIN!');
            setMachineAction(
                'https://thumbs.gfycat.com/EnergeticShortGalapagoshawk-size_restricted.gif'
            );
        } else if (machine.getLives() > 0 && player1.getLives() === 0) {
            setTimeout(function () {
                setGameLog('YOU LOOSE...');
                setMachineAction('https://media1.tenor.com/images/dbfa07ecdabe6c27ef6a6927666d4725/tenor.gif?itemid=9943214');
            }, 1500);

        }
    }
    function setImage(acctionMachine) {
        switch (acctionMachine) {
            case CHARGE:
                setMachineAction(actions.charge);
                break;
            case AVOID:
                setMachineAction(actions.avoid);
                break;
            case ATTACK:
                setMachineAction(actions.attack);
                break;
            default:
                break;
        }
    }

    return (
        <div className="game-holder flex-item">
            <div className="user-action_container flex-col">
                <span>Charge Ki</span>
                <img
                    src={actions.charge}
                    onClick={() => setAnAction(CHARGE)}
                    alt="Charge"
                ></img>
                <span>Avoid attack</span>
                <img
                    src={actions.avoid}
                    onClick={() => setAnAction(AVOID)}
                    alt="Avoid"
                ></img>
                <span>ATTACK!</span>
                <img
                    src={actions.attack}
                    onClick={() => setAnAction(ATTACK)}
                    alt="Attack"
                ></img>
                <p>Player lives: {playerLives}</p>
                <p>Player charges: {playerCharges}</p>
            </div>
            <div className="machine-action_container">
                <div className='game-log'>
                    <span>{gameLog}</span>
                </div>
                <img src={machineAction} alt="machine action"></img>
                <p>Machine lives: {machLives}</p>
                <p>Machine charges: {machCharges}</p>
            </div>
        </div>
    );
}

export default GameComponent;
