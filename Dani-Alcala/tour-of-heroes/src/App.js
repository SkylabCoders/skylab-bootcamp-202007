import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroDetail from './components/HeroDetail';
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';
import { Route } from 'react-router-dom';

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

function App(props) {
	return (
		<div>
			<Header />
			<Route
				path="/"
				exact
				component={() => <HeroDashboard heroes={heroesPromoted} />}
			/>
			<Route
				path="/heroList"
				component={() => <HeroList heroes={heroList} />}
			/>
			<Route path="/hero/:heroId" component={HeroDetail} />
		</div>
	);
}

export default App;
