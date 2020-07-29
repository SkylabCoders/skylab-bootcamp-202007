import React from 'react';
import '../bootstrap.min.css';
import './ToH.css';
import Dashboad from './dashboard';
import Details from './details';
import List from './list';
import heroList from './list.mock';

function ToH({ heroes }) {
	return (
		<div>
			<header>
				<h1>Tour of Heroes</h1>
				<nav>
					<a>Dashboad</a>
					<a>Heroes</a>
				</nav>
			</header>
			<main>
				<Details />
				<List heroes={heroList} />
				<Dashboad />
			</main>
		</div>
	);
}

export default ToH;
