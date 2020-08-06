import React, { useState } from 'react';
import './gameComponent.css';
import player from '../gameComponent/gameLogic/gameLogic';
let player1;
let machine;
function GameComponent() {
	if (typeof player1 === 'undefined') {
		player1 = new player(prompt('enter your name'));
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

	function setAnAction(acc) {
		if (player1.getLives() > 0 && machine.getLives() > 0) {
			player1.setAction(acc);

			acctionMachine = machine.generateAction();
			setImage(acctionMachine);
			console.log('Player ' + player1.getName() + ' ' + player1.getAction());
			console.log('Machine ' + machine.getAction());
			console.log('player ' + player1.recibeAction(machine.getAction()));
			console.log(machine.recibeActionRobot(player1.getAction()));
			setMachCharges(machine.getCharges());
			setMachLives(machine.getLives());
			setPlayerCharges(player1.getCharges());
			setPlayerLives(player1.getLives());
		}
		if (player1.getLives() > 0 && machine.getLives() === 0) {
			console.log('YOU WIN!');
			setMachineAction(
				'https://thumbs.gfycat.com/EnergeticShortGalapagoshawk-size_restricted.gif'
			);
		} else if (machine.getLives() > 0 && player1.getLives() === 0) {
			console.log('YOU LOOSE..');
			setMachineAction(
				'https://media1.tenor.com/images/dbfa07ecdabe6c27ef6a6927666d4725/tenor.gif?itemid=9943214'
			);
		}
	}
	function setImage(acctionMachine) {
		switch (acctionMachine) {
			case 'Charge':
				setMachineAction(actions.charge);
				break;
			case 'Avoid':
				setMachineAction(actions.avoid);
				break;
			case 'Attack':
				setMachineAction(actions.attack);
				break;
			default:
				break;
		}
	}

	return (
		<div className="game-holder flex-item">
			<div className="user-action_container flex-col">
				<img
					src={actions.charge}
					onClick={() => setAnAction('Charge')}
					alt="Charge"
				></img>
				<img
					src={actions.avoid}
					onClick={() => setAnAction('Avoid')}
					alt="Avoid"
				></img>
				<img
					src={actions.attack}
					onClick={() => setAnAction('Attack')}
					alt="Attack"
				></img>
				<p>Player lives: {playerLives}</p>
				<p>Player charges: {playerCharges}</p>
			</div>
			<div className="machine-action_container">
				<img src={machineAction} alt="machine action"></img>
				<p>Machine lives: {machLives}</p>
				<p>Machine charges: {machCharges}</p>
			</div>
		</div>
	);
}

export default GameComponent;
