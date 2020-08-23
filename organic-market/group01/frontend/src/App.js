import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Login from './components/login';

import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<div className="margin-body">
				<BrowserRouter>
					<Switch>
						<Route path="/user" exact component={Login} />

						<Route path="/list" exact component={ProductList} />
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
