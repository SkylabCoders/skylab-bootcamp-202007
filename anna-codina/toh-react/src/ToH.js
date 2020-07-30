import React from 'react';
import './bootstrap.min.css';
import './ToH.css';
import Dashboard from './ components/dashboard';
import Details from './ components/details';
import List from './ components/list';
import heroList from './ components/list.mock';
import Header from './ components/header';
import { Route } from 'react-router-dom';

function ToH() {
	console.log(heroList);
	return (
		<>
			<Header />
			<Route
				path="/"
				exact
				component={() => <Dashboard heroList={heroList} />}
			/>
			<Route
				path="/hero"
				exact
				component={() => <List heroList={heroList} />}
			/>
			<Route path="/hero/:heroId" component={Details} />
		</>
	);
}

export default ToH;
