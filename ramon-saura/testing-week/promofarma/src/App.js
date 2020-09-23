import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import IndexComponents from './components/index-components';
import { Route, Switch } from 'react-router-dom';

function App(props) {
	return (
		<Router>
			<div className="container">
				<Switch>
					<Route path="/" exact component={IndexComponents} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
