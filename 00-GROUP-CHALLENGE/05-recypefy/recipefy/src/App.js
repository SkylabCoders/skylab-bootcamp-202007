import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import RecipePage from './components/RecipePage';
import SearchResult from './components/SearchResult';
import UserFavourite from './components/UserFavourite';
import './App.css';
import Login from './components/Login';

function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/profile" component={Profile} />
				<Route path="/recipe-page/:recipeId" component={RecipePage} />
				<Route path="/search-result" component={SearchResult} />
				<Route path="/userfavourite" component={UserFavourite} />
				<Route path="/login" component={Login}/>
			</Switch>

			<Footer />
		</>
	);
}

export default App;
