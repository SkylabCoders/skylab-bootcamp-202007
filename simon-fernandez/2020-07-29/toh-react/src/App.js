import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import List from './list';
import Details from './Details';
import './App.css';
class App extends React.Component {
	render() {
		return (
			<Router>
				<h1>Tour of Heroes</h1>
				<div className="row nav">
					<a href="/dashboard">Dashboard</a>
					<a href="/list">Heroes</a>
				</div>

				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
				<Switch>
					<Route path="/list">
						<List />
					</Route>
				</Switch>
				<Switch>
					<Route path="/hero/:id">
						<Details />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
