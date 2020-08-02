import React from 'react';
import './App.css';
import HeroList from './components/HeroList';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App(props) {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero/:heroId" component={HeroDetail} />
				<Route path="/hero" component={HeroList} />
				<Redirect from="/heroes" to="/hero" />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
