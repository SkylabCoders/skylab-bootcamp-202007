import React from 'react';
//import './bootstrap.min.css';
import './App.css';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App(props) {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero" exact component={HeroList} />
				<Redirect from="/heroes" to="/hero" />
				<Route path="/hero/:heroId" exact component={HeroDetail} />
				<Route component={PageNotFound} />
			</Switch>
		</>
	);
}

export default App;
