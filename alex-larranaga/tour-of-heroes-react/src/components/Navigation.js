import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeroList from './HeroList';
import Details from './Details';
import Dashboard from './Dashboard';

function Navigation(props) {
	return (
		<Router>
			<h1>Tour of Heroes powered by React</h1>
			<h2></h2>
			<div>
				<a href="">
					<a href="/herolist">
						<button>Hero List</button>
					</a>
				</a>
				<a href="dashboard">
					<button>Dashboard</button>
				</a>
				<a href="details">
					<button>Details</button>
				</a>

				<Switch>
					<Route path="/herolist">
						<HeroList></HeroList>
					</Route>

					<Route path="/details/:id" component={Details}></Route>

					<Route path="/dashboard">
						<Dashboard></Dashboard>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default Navigation;
