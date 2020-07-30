import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import Navigation from './components/Navigation';
import * as serviceWorker from './serviceWorker';
import heroList from './hero.mock';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';
import Details from './components/Details';

let view = 'dash';

const changeViewToList = function () {
	view = 'list';
	renderAll();
};

function renderAll() {
	ReactDOM.render(
		<React.StrictMode>
			<Navigation changeView={() => changeViewToList()} />
			<Dashboard />
			<HeroList />
		</React.StrictMode>,

		document.getElementById('root')
	);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
renderAll();
