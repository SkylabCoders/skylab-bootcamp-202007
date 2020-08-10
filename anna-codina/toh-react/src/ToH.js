import React from 'react';
import './bootstrap.min.css';
import './ToH.css';
import Dashboard from './ components/dashboard';
import Details from './ components/details';
import List from './ components/list';
import heroList from './ components/list.mock';
import Header from './ components/header';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './ components/PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';

function ToH(props) {
	console.log(heroList);
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/hero/:heroId" component={Details} />
					<Route path="/hero" component={Details} />
					<Route path="/heroes" component={List} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</>
	);
}

export default ToH;
