import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import heroList from './hero.mock';
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard';
import List from './component/List';
import Details from './component/Details';

let state = 'dashboard';

function showDashboard() {
	state = 'dashboard';
	reRender();
}

function showList() {
	state = 'list';
	reRender();
}

function showDetails() {
	state = 'details';
	reRender();
}

function reRender() {
	ReactDOM.render(
		<React.StrictMode>
			<Navigation
				onClickDashboard={() => showDashboard()}
				onClickList={() => showList()}
			/>
			{state === 'dashboard' && <Dashboard onClickHero={() => showDetails()} />}
			{state === 'list' && <List onClickHero={() => showDetails()} />}
			{state === 'details' && <Details hero={heroList[0]} />}
		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRender();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
