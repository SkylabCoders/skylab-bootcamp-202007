import React from 'react';
import HeroList from './HeroList';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';

import { Route, Switch } from 'react-router-dom';

function Container() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/heroes" component={HeroList} />
				<Route path="/hero/:heroId" component={Details} />
			</Switch>
		</div>
	);
}

export default Container;
