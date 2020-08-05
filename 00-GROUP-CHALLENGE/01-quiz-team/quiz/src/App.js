import React from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import LeaderBoard from './components/LeaderBoard';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import Question from './components/Question';
import Game from './components/Game';

function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/leaderboard" component={LeaderBoard} />
				<Route path="/login" component={LoginScreen} />
				<Route path="/question" component={Question} />
				<Route path="/themes/:themeSlug" component={Game} />
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
