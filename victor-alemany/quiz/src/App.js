import React from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import LeaderBoard from './components/LeaderBoard'
import LoginScreen from './components/LoginScreen'
import QuizComponent from './components/QuizComponent'
import Dashboard from './components/Dashboard'


function App() {
	return (
		<div className="app">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/leaderboard" exact component={LeaderBoard} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/login" exact component={LoginScreen} />
				<Route component={PageNotFound} />
			</Switch>
			<QuizComponent />
			<Footer />
		</div>
	);
}

export default App;
