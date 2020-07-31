import React from 'react';
import List from './components/toh-list';
import Detail from './components/toh-details';
import Dashboard from './components/toh-dashboard';
import Header from './components/toh-header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function toh(props) {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/hero/:heroId" exact component={Detail} />
				<Route path="/hero" exact component={List} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}
export default toh;
