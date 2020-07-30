import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './hero';
import Dashboard from './dashboard';
import List from './list';
import Details from './Details';
import './bootstrap.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

let view = 'none';
//unir las dos funciones en un que segun el parametro pasado genere un componente o otro
function handleGoToDashboard() {
	view = 'dash';
	renderAgain();
	//return <Dashboard />;
}
function handleGoToList() {
	view = 'list';
	renderAgain();
}
function handleGoToDetails() {
	view = 'details';
	renderAgain();
}

function renderAgain() {
	ReactDOM.render(
		<React.StrictMode>
			<Hero
				goToDashboard={() => handleGoToDashboard()}
				goToList={() => handleGoToList()}
				goToDetails={() => handleGoToDetails()}
			/>
			{view === 'dash' && <Dashboard goToDetails={() => handleGoToDetails()} />}
			{view === 'list' && <List goToDetails={() => handleGoToDetails()} />}
			{view === 'details' && <Details />}
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderAgain();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
