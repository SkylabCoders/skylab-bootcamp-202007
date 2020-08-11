import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import RecipePage from './components/RecipePage';
import SearchResult from './components/SearchResult';
import './App.scss';
import Login from './components/Login';
import authStore from './stores/AuthStore';

function App() {
	const [userLogued, setUserLogued] = useState(false);

	useEffect(() => {
		authStore.addChangeListener(onChange);
		return () => authStore.removeChangeListener(onChange);
	}, [userLogued]);

	function onChange() {
		setUserLogued(authStore.isLogged());
	}
	return (
		<>
			{' '}
			{userLogued && <Header />}
			<Switch>
				<Route path="/main" exact component={Main} />
				<Route path="/recipe-page/:recipeId" component={RecipePage} />
				<Route path="/search-result" component={SearchResult} />
				<Route path="/" component={Login} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
