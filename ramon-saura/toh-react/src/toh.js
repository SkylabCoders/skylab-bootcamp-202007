import React from 'react';
import List from './components/toh-list';
import Detail from './components/toh-details';
import Dashboard from './components/toh-dashboard';
import Header from './components/toh-header';
import { Route } from 'react-router-dom';

function toh(props) {
	return (
		<div>
			<Header />
			<Route path="/" exact component={Dashboard} />
			<Route path="/hero" exact component={List} />
			<Route path="/hero/:heroId" exact component={Detail} />
		</div>
	);
}
export default toh;
