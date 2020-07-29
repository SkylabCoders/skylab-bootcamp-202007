import React from 'react';
import '../bootstrap.min.css';
import './ToH.css';
import Dashboad from './dashboard';
import Details from './details';
import List from './list';

function ToH() {
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
				<List />
				<Dashboad />
			</main>
		</div>
	);
}

export default ToH;
