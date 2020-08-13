import React, { useState } from 'react';
import './gameComponent.css';

import { winIncrement, lossIncrement } from '../../actions/actions';
import Player, { CHARGE, ATTACK, AVOID } from './gameLogic/gameLogic';

import useSound from "use-sound";
import attackSound from '../../sounds/attack.mp3'
import chargeSound from '../../sounds/charge.mp3'
import avoidSound from '../../sounds/avoid.wav'

let player1;
let machine;
function GameComponent(props) {

    //get sounds efects
    const [attack] = useSound(attackSound);
    const [charge] = useSound(chargeSound);
    const [avoid] = useSound(avoidSound);

    //Instancing the new Players
    let Mname = props.match.params.enemy;
    if (typeof player1 === 'undefined') {

        player1 = new Player('You', false);
    }
    if (typeof machine === 'undefined') {
        machine = new Player(Mname);
    }
    //enemy image presentation
    const machineImg = 'https://thumbs.gfycat.com/PleasedLividGreyhounddog-size_restricted.gif';
    //actions images
    const actions = {
        charge: 'https://64.media.tumblr.com/tumblr_m6autdMQ8q1r72ht7o1_500.gif',
        avoid: 'https://i.imgur.com/49nNGha.gif',
        attack: 'https://steamuserimages-a.akamaihd.net/ugc/844842824162102286/E0C77C22F2E6904ED76E6769FD9072D308C6BB86/'
    };
    //heart and Ki logos
    const imgLive = 'https://images-na.ssl-images-amazon.com/images/I/31t66UdClqL.png';
    const imgCharge = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/d9rqdji-5ec98122-7e1c-4da7-a7c7-4b0f6ab86b7a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2ViNzBjY2MtZTdhZC00ZTFhLTg3ZmEtZjk3ZGY5ZWYxYzUyXC9kOXJxZGppLTVlYzk4MTIyLTdlMWMtNGRhNy1hN2M3LTRiMGY2YWI4NmI3YS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lF5QwNjLFrIa5o9dCpU_kaTqPdq1Vk1zzk3YbRjRVOo';


    //States of acctions and lives and Ki
    const [machineAction, setMachineAction] = useState(machineImg);
    const [machLives, setMachLives] = useState(machine.getLives());
    const [machCharges, setMachCharges] = useState(machine.getCharges());
    const [playerLives, setPlayerLives] = useState(player1.getLives());
    const [playerCharges, setPlayerCharges] = useState(player1.getCharges());
    const [gameLog, setGameLog] = useState(machine.getName() + ' challenges You!');


    function setAnAction(acc) {
        let acctionMachine = '';
        if (player1.getLives() > 0 && machine.getLives() > 0) {
            //Set player action
            player1.setAction(acc);
            //Generates and sets Machine action
            acctionMachine = machine.generateAction();
            //Set img acording action of machine
            setImage(acctionMachine);
            //recibe calculates the result for player
            setGameLog(player1.recibeAction(machine.getAction()));
            //calculates the result for the machine
            machine.recibeAction(player1.getAction());
            //Gets the log Result acording to what happends
            if (player1.getAction() === ATTACK && machine.getAction() === AVOID) {
                setGameLog('Enemy avoid the attack');

            } else if (player1.getAction() === ATTACK && machine.getAction() === CHARGE) {
                setGameLog('Enemy was hit by your attack!');
            }
            setNewStats();
        }
        if (player1.getLives() > 0 && machine.getLives() === 0) {
            setGameLog('YOU WIN!');
            winIncrement();
            setTimeout(function () {
                setMachineAction(
                    'https://thumbs.gfycat.com/EnergeticShortGalapagoshawk-size_restricted.gif'
                );
            }, 1500);
            setTimeout(function () {
                player1.resetPlayer();
                machine.resetPlayer();
            }, 2750);
        } else if (machine.getLives() > 0 && player1.getLives() === 0) {
            setGameLog('YOU LOOSE...');
            lossIncrement();
            setTimeout(function () {
                setMachineAction('https://media1.tenor.com/images/dbfa07ecdabe6c27ef6a6927666d4725/tenor.gif?itemid=9943214');
            }, 1500);
            setTimeout(function () {
                player1.resetPlayer();
                machine.resetPlayer();

            }, 2750);
        }
    }
    function setNewStats() {
        setMachCharges(machine.getCharges());
        setMachLives(machine.getLives());
        setPlayerCharges(player1.getCharges());
        setPlayerLives(player1.getLives());
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
        <div className="game-holder flex-item-row">
            <div className='flex-col user-col'>
                <div className="user-action_container flex-col-user">
                    <div className=" flex-col">

                        <img
                            src={actions.charge}
                            onClick={() => { setAnAction(CHARGE); charge() }}
                            alt="Charge"
                        ></img>
                        <p>Charge Ki</p>
                    </div>
                    <div className=" flex-col" >

                        <img
                            src={actions.avoid}
                            onClick={() => { setAnAction(AVOID); avoid() }}
                            alt="Avoid"
                        ></img>
                        <p>Avoid attack</p>
                    </div>
                    <div className=" flex-col">

                        <img
                            src={actions.attack}
                            onClick={() => { setAnAction(ATTACK); attack() }}
                            alt="Attack"
                        ></img >
                        <p>ATTACK!</p>
                    </div >

                </div >
                <div className='flex-col-user__data'>
                    <p>YOU:</p>
                    <img src={imgLive} alt='lives'></img>
                    <span>{playerLives}</span>
                    <img src={imgCharge} alt='ki'></img>
                    <span>{playerCharges}</span>

                </div>
            </div>
            <div className="machine-action_container">
                <div className='game-log'>
                    <span>{gameLog}</span>
                </div>
                <img className='machine-img' src={machineAction} alt="machine action"></img>

                <div className='flex-col-user__data'>
                    <p>ENEMY:</p>
                    <img src={imgLive} alt='lives'></img>
                    <span>{machLives}</span>
                    <img src={imgCharge} alt='ki'></img>
                    <span>{machCharges}</span>

                </div>
            </div>
        </div >
    );
}

export default GameComponent;
