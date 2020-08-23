import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import SignIn from './components/signIn';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="container">
					<Header />
					<div className="margin-body">
						<Switch>
							<Route path="/user" exact component={SignIn} />
							<Route path="/list" exact component={ProductList} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
