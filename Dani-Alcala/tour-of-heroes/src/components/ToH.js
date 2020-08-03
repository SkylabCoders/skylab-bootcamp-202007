import React from 'react';
import '../bootstrap.min.css';
// import '../hero.mock.js';
import Dashboard from './HeroDashboard'
import List from './HeroList'
import Detail from './HeroDetail'

const heroList = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

const heroesPromoted = heroList.slice(0, 4);


function ToH() {
	return (
		<div className="container">
			<div className="jumbotron">
                <h1>Tour of Heroes</h1>
            </div>
			<Dashboard heroes={heroesPromoted}/>
			{/* <List /> */}
				{/* <Detail /> */}
		</div>
	);
}

export default ToH;