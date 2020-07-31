import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch } from 'react-router-dom';

function App(props) {
	return (
		<div>
			<Header />
			<Switch>

				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero/:heroId" component={HeroDetail} />

				<Route path="/hero" component={HeroList} />

			</Switch>
		</div>
	);
}

export default App;
