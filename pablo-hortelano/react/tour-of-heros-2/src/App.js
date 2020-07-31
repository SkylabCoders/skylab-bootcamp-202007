import React from 'react';
import Header from './components/Header';
import HeroDetail from './components/HeroDetail';
import HeroDashboard from './components/HeroDashboard';
import { Router, Route, Link, Switch } from 'react-router-dom';
import HeroList from './hero.mock';

function App() {
	const route = 'dashboard';
	let component = 'Nothing to see here!';

	if (route === 'dashboard') {
		component = <HeroDashboard />;
	} else if (route === 'hero') {
		component = <HeroList />;
	} else if (route === 'hero/14') {
		component = <HeroDetail />;
	}

	return (
		<div>
			<Header />
			<HeroDetail />
			{/* <Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link to="/HeroList">HeroList</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="components/HeroDashboard">
							<HeroDashboard />
						</Route>
						<Route path="components/HeroDashbHeroList">
							<HeroList />
						</Route>
						<Route path="components/HeroDashboard">
							<HeroDashboard />
						</Route>
					</Switch>
				</div>
			</Router> */}
		</div>
	);
}
export default App;
