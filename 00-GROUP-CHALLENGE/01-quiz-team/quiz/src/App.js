import React from 'react';
import './css/app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import LeaderBoard from './components/LeaderBoard';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import Question from './components/Question';
import Game from './components/Game';
import Answer from './components/Answer';
import * as ROUTES from './config/routes';

function App() {
	return (
		<div className="app">
			<Router>
			<Header />
			<Switch>
				<Route path={ROUTES.HOME} exact component={Dashboard} />
				<Route path={ROUTES.LEADERBOARD} component={LeaderBoard} />
				<Route path={ROUTES.LOGIN} component={LoginScreen} />
				<Route path={ROUTES.QUESTION} component={Question} />
				<Route path={ROUTES.THEMES_WILDCARD} component={Game} />
				<Route path={ROUTES.ANSWER} component={Answer} />
				<Route component={PageNotFound} />
			</Switch>
			<Footer />
			</Router>
		</div>
	);
}

export default App;
