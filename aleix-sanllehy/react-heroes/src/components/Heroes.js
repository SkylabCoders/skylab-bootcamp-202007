import React from 'react';
import '../bootstrap.min.css';
import Dashboard from './Dashboard';
import List from './List';
import Details from './HeroDetail';
import heroList from './hero.mock.js';

function Heroes() {
	return (
		<div className="container">
			<header className="jumbotron">
				<h1>Tour of Heroes</h1>
				<button className="btn btn-secondary">Dashboard</button>
				<button className="btn btn-secondary">Heroes</button>
			</header>
			<main>
				<Dashboard heroes={heroList} />
				<List heroes={heroList} />
				<Details />
			</main>
		</div>
	);
}

export default Heroes;
