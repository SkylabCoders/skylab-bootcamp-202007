import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroDetail from './components/HeroDetail';
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import HeroesPage from './components/HeroesPage';

function App(props) {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero/:heroId" component={HeroDetail} />
				<Route path="/hero" component={HeroDetail} />
				<Route path="/heroes" component={HeroesPage} />
				<Redirect from="/heroLists" to="/heroes" />
				<Route component={PageNotFound} />
				//wildcard, cuando no hay ruta q te muestro!!
			</Switch>
		</div>
	);
}

export default App;
