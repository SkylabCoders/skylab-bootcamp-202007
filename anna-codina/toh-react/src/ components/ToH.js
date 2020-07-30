import React from 'react';
import '../bootstrap.min.css';
import './ToH.css';
import Dashboad from './dashboard';
import Details from './details';
import List from './list';
import heroList from './list.mock';
import Header from './header';

function ToH() {
	return (
		<div>
			<main>
				<Header />
				<Details />
				<List heroes={heroList} />
				<Dashboad heroes={heroList} />
			</main>
		</div>
	);
}

export default ToH;
