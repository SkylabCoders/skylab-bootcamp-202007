import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Header from './common/Header';
import DiverList from './components/DiverList';
import DiveSiteDetail from './components/DiveSiteDetail';
import DiveSiteList from './components/DiveSiteList';
import CreateDiver from './components/CreateDiver';
import Main from './components/Main';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/diver' exact component={DiverList} />
				<Route path='/diver/:diverId' exact component={Profile} />
				<Route path='/create-diver' exact component={CreateDiver} />
				<Route
					path='/dive-site/:diveSiteId'
					component={DiveSiteDetail}
				/>
				<Route path='/dive-site' component={DiveSiteList} />
			</Switch>
		</div>
	);
}

export default App;
