import React from 'react';
import './index.css';
import Title from './components/title/title';
import Actions from './components/actions/actions';
import Detail from './components/detail/detail';
import List from './components/list/list';
import Dashboard from './components/dashboard/dashboard';
import heroList from './heroMock';
import { Route } from 'react-router-dom';

function App(props) {
	return (
		<div>
			<Title title="Tour of Heroes" />
			<Route path="/" component={Actions} />
			<Route path="/heroes" component={() => <List heroes={heroList} />} />
			<Route path="/hero/:heroId" component={Detail} />
			<Route
				path="/dashboard"
				component={() => <Dashboard heroes={heroList} />}
			/>
		</div>
	);
}

export default App;
