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

function updateState(newState) {
	state = newState;
	reRender();
}

function reRender() {
	ReactDOM.render(
		<React.StrictMode>
			<Navigation
				onClickDashboard={() => updateState('dashboard')}
				onClickList={() => updateState('list')}
			/>
			{state === 'dashboard' && (
				<Dashboard onClickHero={() => updateState('details')} />
			)}
			{state === 'list' && <List onClickHero={() => updateState('details')} />}
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
