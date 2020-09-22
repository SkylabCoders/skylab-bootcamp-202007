import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from './components/list.jsx';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/list">list Api</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route path="/list">
					<List />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
