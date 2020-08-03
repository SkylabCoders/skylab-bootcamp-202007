import React from 'react';
import './App.css';
import HeroDetails from './components/heroDetails';
import HeroList from './components/heroList';
import Header from './components/Header';
import HeroDashboard from './components/heroDashboard';
import { Route } from 'react-router-dom';

function App(props) {
	return (
		<div>
			<Header />
			<Route path="/" exact component={HeroDashboard} />
			<Route path="/hero" component={HeroList} />
			<Route path="/hero/:heroId" component={HeroDetails} />
		</div>
	);
}

export default App;
