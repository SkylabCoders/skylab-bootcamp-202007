import React from 'react';
import HeroDetail from './HeroDetailsG';
import Header from './HeroHeaderG';
import HeroList from './HeroListG';
import HeroDashboard from './HeroDashboardG';
import { Route, Switch } from 'react-router-dom';
import heroList from './component/hero.mock';
import PageNotFound from './PageNotFound';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route
					path="/"
					exact
					component={() => <HeroDashboard heroes={heroList} />}
				/>
				<Route
					path="/heroes"
					component={() => <HeroList heroes={heroList} />}
				/>
				<Route path="/hero/:heroId" component={HeroDetail} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}
export default App;
