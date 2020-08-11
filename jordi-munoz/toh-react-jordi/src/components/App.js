import React from 'react';
import HeroDetail from './HeroDetail';
import HeroDashboard from './HeroDashboard';
import HeroList from './HeroList';
import Header from './Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './PageNotFound';


function App(props) {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero/:heroId" component={HeroDetail} />
				<Route path="/hero" component={HeroList} />
				<Redirect from="/heroes" to="/hero" />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
