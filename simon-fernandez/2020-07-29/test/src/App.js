import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import HeroesPage from './components/HeroesPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App(props) {
	return (
		<Router>
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" exact component={HeroDashboard} />
					<Route path="/hero/:heroId" component={HeroDetail} />
					<Route path="/hero" component={HeroDetail} />
					<Route path="/heroes" component={HeroesPage} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
