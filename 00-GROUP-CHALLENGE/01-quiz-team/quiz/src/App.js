import React from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import LeaderBoard from './components/LeaderBoard'
import LoginScreen from './components/LoginScreen'
import Dashboard from './components/Dashboard'


function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/leaderboard" exact component={LeaderBoard} />
				<Route path="/login" exact component={LoginScreen} />
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
