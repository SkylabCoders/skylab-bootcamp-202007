import React from 'react';
import './index.css';
import Title from './components/title/title';
import Actions from './components/actions/actions';
import Detail from './components/detail/detail';
import List from './components/list/list';
import Dashboard from './components/dashboard/dashboard';
import heroList from './heroMock';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import HeroesPage from './components/HeroesPage';
import Login from './components/login';

function App(props) {
	return (
		<div>
			<Title title="Tour of Heroes" />
			<Actions />
			<Switch>
				<Route
					path="/hero"
					exact
					component={() => <List heroes={heroList} />}
				/>
				<Route path="/hero/:heroId" component={Detail} />
				<Route
					path="/dashboard"
					component={() => <Dashboard heroes={heroList} />}
				/>
				<Route path="/heroes" component={HeroesPage} />
				<Route path="/login" component={Login} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
