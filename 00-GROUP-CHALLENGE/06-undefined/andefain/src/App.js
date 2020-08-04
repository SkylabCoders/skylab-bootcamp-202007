import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer';
import Home from './components/home/home';
import Finder from './components/finder/finder';
import Login from './components/login/login';
import User from './components/user/user';
import Name from './components/name/name';
import Film from './components/film/film';

function App() {
	return (
		<>
			<Header />
			<Route path="/" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/film" component={Film} />
			<Route path="/name" component={Name} />
			<Route path="/user" component={User} />
			<Route path="/finder" component={Finder} />
			<Footer />
		</>
	);
}

export default App;
